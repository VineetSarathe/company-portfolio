import API from "./api";

export const getEvents = () => API.get("/events");

export const createEvent = (data, token) =>
  API.post("/events", data, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const updateEvent = (id, data, token) =>
  API.put(`/events/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const deleteEvent = (id, token) =>
  API.delete(`/events/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });