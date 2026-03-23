# MOON Auto Mobile

Marketing site for a mobile automotive service business built with React and Vite.

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env.local` and fill in your Supabase project values:

```bash
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

3. In the Supabase SQL Editor, run the schema in `supabase/schema.sql`.

4. Start the app:

```bash
npm run dev
```

## Supabase tables

- `booking_requests`: stores booking leads from the booking page.
- `contact_messages`: stores general inquiries from the contact page.

The schema enables Row Level Security with anonymous insert access for public forms and authenticated read/update access for future admin workflows.

## Production check

```bash
npm run build
```
