import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const events = await prisma.event.findMany({ orderBy: { time: 'asc' } });
  return NextResponse.json(events);
}

export async function POST(req) {
  const data = await req.json();

  const event = await prisma.event.create({
    data: {
      title: data.title,
      description: data.description,
      time: new Date(data.time),
      venue: data.venue,
      fee: Number(data.fee),
      prizes: data.prizes,
      category: data.category,
    },
  });

  return NextResponse.json(event);
}