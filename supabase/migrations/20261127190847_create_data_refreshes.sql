-- One row per Greenbook load, so every result can show "data from <date>".
create table public.data_refreshes (
  id bigint generated always as identity primary key,
  source text not null default 'greenbook',
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  status text not null check (status in ('running', 'success', 'failed')),
  products_total integer,
  medicines_total integer,
  note text
);

-- Row Level Security: nothing is readable unless a policy allows it.
alter table public.data_refreshes enable row level security;

-- Anyone, signed in or not, may read when the data was last updated.
create policy "Anyone can read data refreshes"
  on public.data_refreshes
  for select
  to anon, authenticated
  using (true);