import { getSupabaseClient } from "./supabase";

export async function createBookingRequest(form) {
  const supabase = getSupabaseClient();

  const payload = {
    name: form.name.trim(),
    phone: form.phone.trim(),
    location: form.location.trim(),
    vehicle: form.vehicle.trim(),
    service: form.service,
    preferred_date: form.date,
    notes: form.notes.trim() || null,
  };

  const { error } = await supabase.from("booking_requests").insert(payload);

  if (error) {
    throw error;
  }
}

export async function createContactMessage(form) {
  const supabase = getSupabaseClient();

  const payload = {
    name: form.name.trim(),
    email: form.email.trim(),
    message: form.message.trim(),
  };

  const { error } = await supabase.from("contact_messages").insert(payload);

  if (error) {
    throw error;
  }
}