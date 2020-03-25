import deepmerge from 'deepmerge';

const common = {
	identity: {
		response_type: 'code',
		scope: 'openid profile',
		oidc_path: '/oauth',
		automaticSilentRenew:true,
		validateSubOnSilentRenew: true,
		loadUserInfo: false,
	},
};
const dev = {
	hosts: {
		idp_path: 'https://login.devhost.dev',
		app_path: 'https://diversion.devhost.dev'
	},
	identity: {
		client_id: 'JAzEpSxNS8SXEfgQUIbyEQ',
	},
};
const production = {
	hosts: {
		idp_path: 'https://login.greenstuff.io',
		app_path: 'https://diversion.greenstuff.io'
	},
	identity: {
		client_id: 'z2EJ9FrsTZ6IO9uRPHF_PQ',
	},
};

const MergedConfig = deepmerge.all([
	common,
	(process.env.production? production : dev),
]);

export default MergedConfig;
