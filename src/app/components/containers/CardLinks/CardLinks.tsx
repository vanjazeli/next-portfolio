import Link from 'next/link';
import Image from 'next/image';
import ArrowLink from '../../ui/ArrowLink/ArrowLink';

export default function CardLinks() {
	return (
		<ul>
			<li>
				<div className="flex lg:p-6">
					<div className="w-1/4">
						<Image src="/wunder-wasabi.png" alt="testing alt" width={1920} height={1080} />
					</div>
					<div className="w-3/4">
						<ArrowLink href="/" variant="regular" text="Wunder & Wasabi - Crypto and NFT" target="" />
					</div>
				</div>
			</li>
		</ul>
	);
}
