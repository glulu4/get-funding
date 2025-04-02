import Image from 'next/image';

export default function IPhoneImage() {
    return (
        <div className="relative w-[300px] h-[600px]">
            {/* Content inside the iPhone */}
            <Image
                src="/images/iphone-content.PNG"
                alt="App preview displayed on an iPhone screen"
                fill
                className="object-cover rounded-[30px] p-2"
                priority
            />

            {/* iPhone Frame overlay */}
            <Image
                src="/images/phone-frame.svg"
                alt="iPhone frame overlay"
                fill
            />
        </div>
    );
}
