import { EventHeader } from '@src/components/BaseHeader';
import { db } from '@src/server/db';
import { events } from '@src/server/db/schema';
import { eq } from 'drizzle-orm';
import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TimeComponent from './TimeComponent';

type Params = { params: { id: string } };

export default async function EventsPage({ params }: Params) {
  const res = await db.query.events.findFirst({
    where: eq(events.id, params.id),
    with: { club: true },
  });

  if (!res) return <div>Event Not Found.</div>;

  const { club, ...event } = res;

  const clubTags = ['Software', 'Innovation', 'Other']

  return (
    
    <main className="w-full md:pl-72 text-white">
      <EventHeader />
      <div className="mb-5 flex flex-col space-y-6 px-7">
        <div className="relative h-full w-full rounded-xl bg-blue-500 p-10 shadow-lg">
          <div className="flex ">
            {clubTags.map( (tag) => (
              <p
                key={tag}
                className=" mr-5 pt-8 pb-10 font-semibold "
              >
                {tag}
              </p>
            ))}
          </div>
          <h1 className="text-4xl font-semibold">
            {event.name}
          </h1>
          <TimeComponent date={event.startTime.toLocaleString()} />
        </div>
      </div>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params.id;

  const found = await db.query.events.findFirst({
    where: eq(events.id, id),
    with: { club: true },
  });
  if (!found)
    return {
      title: 'Event not found',
      description: 'Event not found',
    };

  return {
    title: `${found.name} - Jupiter`,
    description: found.description.slice(0, 30) + '...',
    alternates: {
      canonical: `https://jupiter.utdnebula.com/event/${found.id}`,
    },
    openGraph: {
      url: `https://jupiter.utdnebula.com/event/${found.id}`,
      description: found.name + ' - Jupiter',
    },
  };
}
