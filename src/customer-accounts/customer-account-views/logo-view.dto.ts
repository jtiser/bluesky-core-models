﻿ namespace bluesky.core.models.account {
	/** Dto of a logo view.Contains attributes related to the logo setup. */
	export interface ILogoViewDto extends models.IResourceBase {
		/** Gets or sets a value indicating whether this logo is a GSA account with a unique central invoice. */
		IsCentralBilling: boolean;
		/** Gets the subsidiary managing the logo. */
		ManagementSubsidiary: string;
	}
}
