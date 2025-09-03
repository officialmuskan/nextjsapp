import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

export async function GET() {
  console.log('GET /api/schools called'); // Debug log
  
  try {
    const schools = await query('SELECT * FROM schools ORDER BY created_at DESC');
    console.log('Schools fetched:', schools.length); // Debug log
    
    return NextResponse.json(schools);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch schools', details: error.message },
      { status: 500 }
    );
  }
}

// Add OPTIONS for CORS if needed
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}