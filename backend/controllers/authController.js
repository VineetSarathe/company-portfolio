const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      email,
      password: hashedPassword
    });

    res.json(admin);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (!admin) {
    return res.status(401).json({ message: "Admin not found" });
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign(
    { id: admin._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
};