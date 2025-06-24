import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
    try {
        const token = req.headers.get('authorization');
        const { searchParams } = new URL(req.url);
        const offset = Number(searchParams.get('offset')) || '0';
        console.log(offset)

        if (!token) {
            return NextResponse.json({ error: 'Missing Authorization header' }, { status: 401 });
        }

        const apiResponse = await axios.get(
            `https://zapliparts.baz-on.ru/external-api/getProducts?order=desc${offset != 0 ? `&offset=${offset}` : ''}`,
            {
                params: {
                    limit: 500,
                },
                headers: {
                    Authorization: token,
                    Accept: 'application/json'
                }
            }
        );

        return NextResponse.json(apiResponse.data, { status: apiResponse.status });
    } catch (err) {
        return new NextResponse(JSON.stringify(err || { error: 'Proxy failed' }), {
            headers: { 'Content-Type': 'application/json' }
        });
    }
}