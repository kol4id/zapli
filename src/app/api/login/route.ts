import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  try {
    const response = await axios.post('https://a.baz-on.ru/login/user', {
        login: 'c4271_external_app',
        password: 'tqmOya/U1#D&,y%' 
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
        error || { error: 'Unknown error' },
    );
  }
}