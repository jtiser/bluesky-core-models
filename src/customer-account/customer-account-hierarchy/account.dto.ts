﻿ namespace bluesky.core.model.account {
	/** DTO of an account.Base class holding MetraNet core account properties and identifiers.TODO MGA : inheriting from OrderManagementEntityDto is a hack, as we do not have custom DTOs for Accounts comming from OrderManagement DB. TOFIX when we don't have these entities saved in OM. */
	export interface IAccountDto extends IOrderManagementEntityDto {
		/** Gets or sets the account type. */
		AccountType: string;
		/** Gets or sets the MetraNet identifier of the account. */
		MNId?: number;
		/** Gets or sets the user name assigned to the account.TODO MGA : to be renamed to Uid : impacts on Proxies / HUB ? Is it acceptable or not ? */
		UserName: string;
		/** Gets or sets the parent account.TODO MGA : to be renamed to AncestorAccountUid : impacts on Proxies / HUB ? Is it acceptable or not ? */
		AncestorAccountUserName: string;
		/** Gets or sets the account status value.
			TODO MGA: this should be migrated to an AccountStatusEnum type both here & server-side (enum value serialization works in TS) */
		AccountStatus: string;
		/** Gets or sets the payer username.TODO MGA : to be renamed to PayerUid : impacts on Proxies / HUB ? Is it acceptable or not ? */
		PayerUserName: string;
		/** Gets or sets the start date of the account. */
		AccountStartDate: Date;
		/** Gets or sets the end date of the account. */
		AccountEndDate?: Date;
		/** Gets or sets the start date of the association with the current parent account (ancestor). */
		HierarchyStartDate?: Date;
		/** Gets or sets the end date of the association with the current parent account (ancestor). */
		HierarchyEndDate?: Date;
		/** Gets or sets the password used by the account to access MetraView site. */
		Password: string;
		/** Gets or sets the start date of the payment redirection with the current payer account. */
		PaymentStartDate?: Date;
		/** Gets or sets the end date of the payment redirection with the current payer account. */
		PaymentEndDate?: Date;
		/** Gets or sets the Internal view contains the Internal account information.It is required for all types of accounts. */
		InternalView: account.IInternalViewDto;
		/** Gets or sets the Common view gathers attributes shared by all of the Accounts. */
		CommonView: account.ICommonViewDto;
	}
}
