﻿ namespace bluesky.core.models.account {
	/** Header DTO of an accountTODO MGA : inheriting from OrderManagementEntityDto is a hack, as we do not have custom DTOs for Accounts comming from OrderManagement DB. TOFIX when we don't have these entities saved in OM. */
	export interface IAccountHeaderDto extends bluesky.core.models.IOrderManagementEntityDto {
		/** Gets or sets the user name assigned to the account.TODO MGA : to be renamed to Uid : impacts on Proxies / HUB ? Is it acceptable or not ? */
		UserName: string;
		/** Gets or sets the account type. */
		AccountType: string;
		/** Gets or sets the customer node name. */
		CustomerNodeName: string;
		/** TODO MGA : to be renamed to Uid : impacts on Proxies / HUB ? Is it acceptable or not ? */
		PayerUserName: string;
		/** TODO MGA : to be renamed to Uid : impacts on Proxies / HUB ? Is it acceptable or not ? */
		LogoUserName: string;
		/** The status of the account. */
		AccountStatus: string;
	}
}
