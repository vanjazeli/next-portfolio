export type IconVariantsT = 'linkedin' | 'github' | 'phone' | 'email' | 'location' | 'job' | 'education' | 'arrow-top-right' | 'arrow-right' | 'external-link' | 'clock';

export type IconLinkT = {
	url: string;
	iconVariant: IconVariantsT;
	target?: string;
};
