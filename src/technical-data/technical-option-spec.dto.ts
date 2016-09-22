﻿ namespace bluesky.core.models.technicalData {
	/** Defines specifications (templates) for TechnicalOptions. */
	export interface ITechnicalOptionSpecDto extends models.IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets Name of the TechnicalOptionSpecification. */
		Name: string;
		/** Gets or sets Technical option specification value. */
		Value: string;
		/** Gets or sets Provisioning type */
		ProvisioningType: string;
	}
}
