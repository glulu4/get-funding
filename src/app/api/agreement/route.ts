import {prisma} from '@/lib/prisma';
import {NextResponse} from 'next/server';

export async function POST(req: Request) {
    try {


        const forwardedFor = req.headers.get('x-forwarded-for');
        const ip =
            forwardedFor?.split(',')[0]?.trim() ||
            req.headers.get('x-real-ip') ||
            'Unknown';

        console.log('Client IP:', ip);
        const body = await req.json();
        // const {userId, termsVersion, ip, userAgent} = body;

        console.log('Request body:', body);

        const {firstName, lastName, email, termsVersion, userAgent, source} = body;

        if (!firstName || !lastName || !email || !termsVersion || !userAgent) {
            return NextResponse.json({error: 'Missing fields'}, {status: 400});
        }


        const agreement = await prisma.agreement.create({
            data: {
                firstName,
                lastName,
                email,
                termsVersion,
                ip: ip || '', // optional — we can get this server-side too later
                userAgent,
                source,
            },
        });

        return NextResponse.json({success: true, agreement});
    } catch (error) {
        console.error('Error creating agreement:', error);
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
    }
}
