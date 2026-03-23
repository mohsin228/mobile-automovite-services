create extension if not exists pgcrypto;

create table if not exists public.booking_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  location text not null,
  vehicle text not null,
  service text not null,
  preferred_date date not null,
  notes text,
  status text not null default 'new' check (status in ('new', 'contacted', 'scheduled', 'completed', 'cancelled')),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  status text not null default 'new' check (status in ('new', 'reviewed', 'responded', 'archived')),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists booking_requests_set_updated_at on public.booking_requests;
create trigger booking_requests_set_updated_at
before update on public.booking_requests
for each row
execute function public.set_updated_at();

drop trigger if exists contact_messages_set_updated_at on public.contact_messages;
create trigger contact_messages_set_updated_at
before update on public.contact_messages
for each row
execute function public.set_updated_at();

create index if not exists booking_requests_created_at_idx on public.booking_requests (created_at desc);
create index if not exists contact_messages_created_at_idx on public.contact_messages (created_at desc);
create index if not exists booking_requests_status_idx on public.booking_requests (status);
create index if not exists contact_messages_status_idx on public.contact_messages (status);

alter table public.booking_requests enable row level security;
alter table public.contact_messages enable row level security;

drop policy if exists "anon can insert booking requests" on public.booking_requests;
create policy "anon can insert booking requests"
on public.booking_requests
for insert
to anon
with check (true);

drop policy if exists "authenticated can read booking requests" on public.booking_requests;
create policy "authenticated can read booking requests"
on public.booking_requests
for select
to authenticated
using (true);

drop policy if exists "authenticated can update booking requests" on public.booking_requests;
create policy "authenticated can update booking requests"
on public.booking_requests
for update
to authenticated
using (true)
with check (true);

drop policy if exists "anon can insert contact messages" on public.contact_messages;
create policy "anon can insert contact messages"
on public.contact_messages
for insert
to anon
with check (true);

drop policy if exists "authenticated can read contact messages" on public.contact_messages;
create policy "authenticated can read contact messages"
on public.contact_messages
for select
to authenticated
using (true);

drop policy if exists "authenticated can update contact messages" on public.contact_messages;
create policy "authenticated can update contact messages"
on public.contact_messages
for update
to authenticated
using (true)
with check (true);