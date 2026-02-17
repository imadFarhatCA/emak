// Contact information for EMAK Telecom

export const companyInfo = {
	name: 'EMAK telecom',
	tagline: 'Empowering businesses with seamless, reliable phone services across North America',
	description: 'Montreal-based phone company serving SMBs across Canada',
	address: {
		street: '10330 Cote-de-Liesse - Suite 130',
		city: 'Montreal',
		province: 'QC',
		postalCode: 'H8T 1A3',
		country: 'Canada',
		fullAddress: '10330 Cote-de-Liesse - Suite 130, Montreal, QC, H8T 1A3, Canada'
	},
	phone: {
		main: '(514) 738-6000',
		secondary: '(514) 400-0226',
		sales: '(514) 400-0225',
		tollFree: '(844) EMAK-TEL',
		tollFreeAlt: '(844) EMAK-TEK'
	},
	email: {
		info: 'info@emaktelecom.tech',
		support: 'support@emak.tech',
		sales: 'sales@emak.tech'
	}
};

export const officeContact = {
	title: 'The Office',
	address: companyInfo.address.fullAddress,
	phones: [companyInfo.phone.main, companyInfo.phone.secondary],
	email: companyInfo.email.support
};

export const salesContact = {
	title: 'Sales Team',
	phones: [companyInfo.phone.sales, `Toll Free ${companyInfo.phone.tollFreeAlt}`],
	email: companyInfo.email.sales
};
