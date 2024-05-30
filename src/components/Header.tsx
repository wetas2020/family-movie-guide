import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-5 border-b font-sans">
            <div className="flex pl-6">
                <Image src="/logo.png" width={30} height={30} alt="logo" />
                <h1 className="text-2xl font-bold ml-3 font-abril">Family Movie Guide</h1>
            </div>
            <div className="pr-2">
                <a href="https://www.buymeacoffee.com/saadgab7e" target="_blank">
                    <Image
                        src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
                        alt="Buy Me A Coffee"
                        width={217}
                        height={60}
                    />
                </a>
            </div>
        </header>
    );
};

export default Header;
