import { NextRequest, NextResponse } from 'next/server';
import { query } from '../../../../lib/db';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request) {
  console.log('POST /api/schools/add called'); // Debug log
  
  try {
    // Parse form data
    const formData = await request.formData();
    console.log('Form data received'); // Debug log
    
    const name = formData.get('name');
    const address = formData.get('address');
    const city = formData.get('city');
    const state = formData.get('state');
    const contact = formData.get('contact');
    const email_id = formData.get('email_id');
    const image = formData.get('image');

    console.log('Parsed data:', { name, city, contact, email_id }); // Debug log

    // Validate required fields
    if (!name || !address || !city || !state || !contact || !email_id) {
      console.log('Validation failed: missing fields'); // Debug log
      return NextResponse.json(
        { error: 'All fields except image are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email_id)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(contact)) {
      return NextResponse.json(
        { error: 'Contact number must be 10 digits' },
        { status: 400 }
      );
    }

    let imageName = null;

    // Handle image upload
    if (image && image.size > 0) {
      console.log('Processing image upload'); // Debug log
      
      try {
        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Ensure upload directory exists
        const uploadDir = path.join(process.cwd(), 'public/schoolImages');
        try {
          await mkdir(uploadDir, { recursive: true });
        } catch (mkdirError) {
          // Directory might already exist, ignore error
          console.log('Directory exists or created');
        }

        // Generate unique filename
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = image.name.split('.').pop() || 'jpg';
        imageName = `school-${uniqueSuffix}.${fileExtension}`;
        
        const imagePath = path.join(uploadDir, imageName);
        await writeFile(imagePath, buffer);
        console.log('Image saved:', imageName); // Debug log
      } catch (imageError) {
        console.error('Image upload error:', imageError);
        // Continue without image
        imageName = null;
      }
    }

    // Insert into database
    console.log('Inserting into database'); // Debug log
    const result = await query(
      'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, address, city, state, contact, imageName, email_id]
    );

    console.log('Database insert successful, ID:', result.insertId); // Debug log

    return NextResponse.json({
      success: true,
      id: result.insertId,
      message: 'School added successfully'
    }, { status: 201 });

  } catch (error) {
    console.error('Error in POST /api/schools/add:', error);
    return NextResponse.json(
      { error: 'Failed to add school', details: error.message },
      { status: 500 }
    );
  }
}

// export async function OPTIONS() {
//   return new NextResponse(null, {
//     status: 200,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type',
//     },
//   });
// }