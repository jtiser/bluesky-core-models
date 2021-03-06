﻿namespace bluesky.core.model.customerOrder {
	/** DTO of a customer order. */
	export interface ICustomerOrderDto extends IResourceBase {
		/** Gets or sets the unique identifier. */
		Id: number;
		/** Gets or sets Customer (Logo) */
		Customer: ICustomerDto;
		/** Gets or sets Customer order name */
		OrderName: string;
		/** Gets or sets Customer order status. */
		CustomerOrderStatus: string;
		/** Gets or sets the OrderType. */
		OrderType: string;
		/** Identifier of the workflow, generated by Workflow Foundation. */
		WorkflowId?: string;
		/** Identifier of the related case in SalesForce.When an order is in error, a case can be created to report the issue. */
		CaseId: string;
		/** Gets or sets HierarchySubsetOrder: The customer order may contain a hierarchy subset order */
		HierarchySubsetOrder: IHierarchySubsetOrderDto;
		/** Gets or sets SubscriptionSubsetOrder: The customer order may contain a subscription subset order */
		SubscriptionSubsetOrder: ISubscriptionSubsetOrderDto;
		/** Gets or sets UserSubsetOrder: The customer order may contain a user subset order */
		UserSubsetOrder: IUserSubsetOrderDto;
		/** Gets or sets Customer order context */
		OrderContext: IOrderContextDto;
		/** Gets or sets Offer Name */
		OfferName: string;
		/** Gets or sets the number of processed nodes */
		ProcessedNodesCount: string;
	}
}
