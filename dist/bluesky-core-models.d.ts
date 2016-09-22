declare namespace bluesky.core.models.clientConfig {
    interface IAjaxClientEndpointConfigurationDto {
        EndpointBaseURL: string;
        EndpointSuffix: string;
        AuthToken: string;
        AuthTokenValidityEndDate: Date;
    }
}

declare namespace bluesky.core.models.clientConfig {
    import UserSsoDto = models.userManagement.IUserSsoDto;
    interface IAjaxClientConfigurationDictionnary {
        /**
         * Dictionnary of client configuration per-endpoint.
         * @param endpointType : of EndpoinTypeEnum type, but it cannot be strongly typed due too TS not implementing it atm: https://github.com/Microsoft/TypeScript/issues/2491
         * @returns {}
         */
        [endpointType: number]: clientConfig.IAjaxClientEndpointConfigurationDto;
    }
    interface IBlueskyAjaxClientConfigurationDto {
        /**
         * As provided by the server, the dictionnary of client config per endpoint.
         */
        EndpointConfigurationDictionnary: IAjaxClientConfigurationDictionnary;
        CurrentUserRole: string;
        CurrentUser?: UserSsoDto;
    }
}

declare namespace bluesky.core.models.clientConfig {
    /**
     * Enum generated from the server to know the list of supported endpoint configuration.
     */
    enum EndpointTypeEnum {
        /**
         * Origin domain from which the current client was loaded.
         */
        CurrentDomain = 0,
        CoreApi = 1,
        MarketingApi = 2,
        SelfcareApi = 3,
        QuoteWizard = 4,
        OrderEntry = 5,
        OrderTracking = 6,
        Metranet = 7,
        TechnicalInventory = 8,
        TemplateGenerator = 9,
        Salesforce = 10,
        /**
         * External URLs (not treatment applied, rejected if URL is not full)
         */
        External = 11,
    }
}

declare namespace bluesky.core.models {
    /** Base information for a file upload. */
    interface IFileUploadBaseDto {
        /** File encoded in base 64. */
        FileBase64Url: string;
        /** Name of the file. */
        FileName: string;
        /** Content Type. */
        ContentType: string;
    }
}

declare namespace bluesky.core.models {
    /** Json wrapper for boolean responses.TODO MGA: it must be made clear to external consumers how to read the value of the boolean response. */
    interface IJsonBooleanResponseDto {
        /** the status of the flag. */
        BooleanResponse: boolean;
    }
}

declare namespace bluesky.core.models {
    /** Dto for MetraNet Enumerations */
    interface IMetraNetEnumerationDto {
        Key: string;
        Value: string;
        DisplayValue: string;
        ExportCode: string;
        MetraNetNamespace: string;
        NaturalEnglish: string;
    }
}

declare namespace bluesky.core.models {
    /** Base DTO class to give the Id of an entity existing in the OrderManagement Database. */
    interface IOrderManagementEntityDto extends models.IResourceBase {
        /** Entity Id of the item existing in OM DB. */
        OrderManagementEntityId: number;
    }
}

declare namespace bluesky.core.models {
    /** DTO for OM Enumerations. */
    interface IOrderManagementEnumerationDto {
        Key: number;
        Value: string;
        DisplayValue: string;
    }
}

declare namespace bluesky.core.models {
    interface IPagedResourceList<T extends models.IResourceBase> extends models.IResourceBase {
        /** La liste interne concrète des ressources de type T de cette liste non paginée. */
        Items: T[];
        FirstItemOnPage: number;
        HasNextPage: boolean;
        HasPreviousPage: boolean;
        IsFirstPage: boolean;
        IsLastPage: boolean;
        LastItemOnPage: number;
        PageCount: number;
        PageNumber: number;
        PageSize: number;
        TotalItemCount: number;
    }
}

declare namespace bluesky.core.models {
    /** Base class for all resources.TODO MGA : Move this class in a base API project */
    interface IResourceBase {
        /** Links to related resources. */
        Links: any[];
    }
}

declare namespace bluesky.core.models {
    interface IResourceList<T extends models.IResourceBase> extends models.IResourceBase {
        /** La liste interne concrète des ressources de type T de cette liste non paginée. */
        Items: T[];
        /** Le nombre d'éléments retournés dans cette liste non paginée. */
        TotalCount: number;
    }
}

declare namespace bluesky.core.models.systemInfo {
    /** DTO of the API version. */
    interface IApiVersionDto extends models.IResourceBase {
        /** Version's number. */
        Version: string;
    }
}

declare namespace bluesky.core.models.systemInfo {
    /** DTO of the Order Management Database Version. */
    interface IDatabaseVersionDto {
        /** Gets or sets version of the [OrderManagement] Database at a current date. */
        Version: string;
        /** Gets or sets date of the specified version of the [OrderManagement] Database. */
        StartDate: Date;
    }
}

declare namespace bluesky.core.models.technicalData {
    /** AccessAccount characteristics */
    interface IAccessCharacteristicDto extends models.IOrderManagementEntityDto {
        /** Gets or sets the name of the characteristic. */
        Name: string;
        /** Gets or sets the value of the characteristic. */
        Value: string;
        /** Technical option specification name. */
        TechnicalOptionSpecName: string;
        /** Business Value of the access characteristic. */
        BusinessValue: string;
    }
}

declare namespace bluesky.core.models.technicalData {
    /** This entity contains the information to configure, modify an access audio conference for a user. */
    interface IAudioAccessDto extends technicalData.ITechnicalAccessDto {
        /** Gets or sets Audio access type coming from the TI : Used values: MeetMe or Meet Me Secure.Additional values: Attended, FlexFlow, ManagementAlert, MeetMeDirect, MeetMeOperatorAssisted, Playback, TollFree.TODO ABE : Unused, duplicated with ConferenceType. To be removed from model (Domain, DAL OM...) */
        AccessType: string;
        /** Gets or sets Extension */
        Extension: string;
        /** Gets or sets Access Personal Information Number (used by User to access the service) */
        ModeratorPIN: string;
        /** Gets or sets Access Personal Information Number (used by audio participant to access the service) */
        ParticipantPIN: string;
        /** List of participants. */
        Participants: technicalData.IParticipantDto[];
    }
}

declare namespace bluesky.core.models.technicalData {
    /** Integrated audio access */
    interface IBaseIntegratedAudioAccessDto extends technicalData.IAudioAccessDto {
        /** Gets or sets AudioIntegrationIndex */
        AudioIntegrationIndex: number;
        /** Gets or sets Web access identifier. */
        WebAccessId: number;
    }
}

declare namespace bluesky.core.models.technicalData {
    /** DTO of a branding profile.A branding profile contains the technical data about a welcome pack email template. */
    interface IBrandingProfileDto extends models.IResourceBase {
        /** Gets or sets the identifier of the branding profile. */
        Uid: string;
        /** Gets or sets the name of the branding profile. */
        Name: string;
        /** Gets or sets the level of the branding profile. */
        Level: string;
        /** Gets or sets the description of the branding profile. */
        Description: string;
        /** Gets or sets the version of the branding profile. */
        Version: number;
    }
}

declare namespace bluesky.core.models.technicalData {
    /** DDIs (Direct Dial In) correspond to external conference number which permits tothe customer to access an audio conference. */
    interface IDirectDialInDto extends models.IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets Unique identifier of a DDI */
        InternationalDirectDialIn: string;
        /** Identifies the carrier of a DDI */
        Carrier: string;
        /** Identifies the City of a DDI */
        City: string;
        /** Identifies the Country of a DDI */
        Country: string;
        /** Description of a DDI */
        Description: string;
        /** Identifies the spoken language of a DDI */
        Language: string;
        /** Displayed Number of a DDI */
        PresentedVisualDirectDialIn: string;
        /** Identifies the Reference Order of a DDI */
        ReferenceOrder: string;
        /** Server address of the bridge AMG on which a DDI is provisioned */
        AMGAddress: string;
        /** Server port of the bridge AMG on which a DDI is provisioned */
        AMGPort: number;
        /** Identifies the DDI country in ISO 3166-2 format */
        IsoCountryCode: string;
        /** Regional area code of the visual DDI */
        TelephoneAreaCode: string;
        /** Telephone Country Code */
        TelephoneCountryCode: string;
        /** Welcome Message */
        WelcomeMessage: string;
        /** Waiting Music */
        WaitingMusic: string;
        /** Flag indicating whether the DDI is dedicated.True if the field Role is equal to Dedicated. False if Role is equal to Shared. */
        IsDedicated: boolean;
        /** Flag indicating whether the DDI is branded. */
        IsBranded: boolean;
        /** When a DDI is returned in the list of access' DDIs, this flag indicates if the DDI is chosen by the Technical Inventory as the priorized one for a given type and a given usage.The Technical Inventory chooses a DDI based on its role, the user's primary group and country, and the service platform's country. */
        IsLocal: boolean;
        /** Gets or sets Required action on DDI */
        DirectDialInAction: string;
        /** Gets or sets Role of the DDI */
        DirectDialInRole: string;
        /** Type of conference that is assigned to the DDI */
        ConferenceType: string;
        /** Booking status of a DDI */
        Status: string;
        /** Type of the DDI */
        DirectDialInType: string;
        /** List of TerminatingNumbers */
        TerminatingNumbers: technicalData.ITerminatingNumberDto[];
    }
}

declare namespace bluesky.core.models.technicalData {
    /** This entity contains the information needed to configure, modify an access generic conference for a user. */
    interface IGenericAccessDto extends technicalData.ITechnicalAccessDto {
        /** Login to access the generic conference. */
        Login: string;
        /** Password to access to the generic conference. */
        Password: string;
    }
}

declare namespace bluesky.core.models.technicalData {
    /** Integrated audio access */
    interface IIntegratedAudioAccessDto extends technicalData.IBaseIntegratedAudioAccessDto {
    }
}

declare namespace bluesky.core.models.technicalData {
    /** A participant of a conference is related to a meet me secure access. */
    interface IParticipantDto extends models.IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Identifier of the participant in the technical inventory. */
        TechnicalParticipantId: string;
        /** Identifier of the participant in the service platform. */
        PlatformParticipantId: string;
        /** Participant name. */
        Name: string;
        /** Meet me secure code, generated by the technical inventory or by the service platform. */
        MeetMeSecureCode: string;
        /** Participant email. */
        Email: string;
        /** Participant phone number. */
        PhoneNumber: string;
        /** Additional comments. */
        Comments: string;
        /** Gets or sets the Action for a participant: add, update or delete. */
        Action: string;
        /** Gets or sets the Participant type. A participant can have a Moderator or Participant type. */
        ParticipantType: string;
    }
}

declare namespace bluesky.core.models.technicalData {
    import ManagementSubsidiaryDto = account.IManagementSubsidiaryDto;
    /** Domain is the parent class and should be abstract for export interface purpose.A Domain corresponds to a technical environment set up for a Sales Channel /Subsidiary, on which the customer will be provisioned: it is hosted byone/several Service Platforms, uses subset of logical resources which can bespecifically branded, and defines a default set of options. */
    interface IServicePlatformDomainDto extends models.IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the Unique name of the Domain */
        Name: string;
        /** Gets or sets the Domain's Sales Channel */
        SalesChannel: string;
        /** Gets or sets Provisioning status of the Domain. */
        DomainStatus: string;
        /** Gets or sets Domain specification name. */
        DomainSpecName: string;
        /** List of service platforms */
        ServicePlatforms: technicalData.IServicePlatformDto[];
        /** List of management subsidiaries. */
        ManagementSubsidiaries: ManagementSubsidiaryDto[];
    }
}

declare namespace bluesky.core.models.technicalData {
    /** Service Platform is a physical resource in Arkadin network. It can groupseveral Technical Elements.Different kinds of service platform can be created: AVAYA 6200, AVAYA 7000,SEP/VIPER, AnyWhere, WebEx, WebEx Gateway, Vidyo, COBRA. */
    interface IServicePlatformDto extends models.IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets Name of the Service Platform. */
        Name: string;
        /** Gets or sets Primary Bridge for an AccessAccount */
        IsPrimary: boolean;
        /** Gets or sets Code of the language known by the Service Platform. */
        ServicePlatformCode: string;
        /** Gets or sets Language name known by the Service Platform. */
        ServicePlatformLanguage: string;
        /** Gets or sets Role. */
        Role: string;
        /** Gets or sets Extention */
        Extension: string;
        /** Subsidiary of the Service Platform */
        Subsidiary: string;
        /** Service Platform country */
        Country: string;
        /** Status of the service platform */
        Status: string;
        /** Service platform specification */
        ServicePlatformSpec: string;
    }
}

declare namespace bluesky.core.models.technicalData {
    /** A Subdomain is instantiated for a given Customer when subscribing to aTechnicalProduct.It is dedicated to a Customer and inherits the characteristics of the parentDomain.It can be of type Audio, Web or Video. */
    interface ISubdomainDto extends models.IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets Unique name of the Subdomain */
        Name: string;
        /** Gets or sets a flag indicates if the subdomain was created at the same time as the technical product.This value is returned by the Technical Inventory */
        IsNew: boolean;
        /** Gets or sets Company identifier. */
        CompanyIdentifier: string;
        /** Description */
        Description: string;
        /** Gets or sets DomainSpecName of the user */
        DomainSpecName: string;
        /** Subdomain belongs to a domain. */
        ServicePlatformDomain: technicalData.IServicePlatformDomainDto;
        /** This resource describes microsites for WebEx. */
        Url: technicalData.IUrlDto;
        /** DDIs list. */
        DirectDialIns: technicalData.IDirectDialInDto[];
    }
}

declare namespace bluesky.core.models.technicalData {
    /** Dto header of a technical access **/
    interface ITechnicalAccessHeaderDto extends models.IOrderManagementEntityDto {
        /** Value of the technical access type enumeration. */
        TechnicalAccessType: string;
        /** Gets or sets Name of the AccessAccount, generated by TI. */
        AccessName: string;
        /** Gets or sets Conference reference */
        ConferenceRef: string;
        /** Gets or sets Domain name */
        DomainName: string;
        /** Gets or sets a flag indicates if is one time event */
        IsOneTime: boolean;
        /** Gets or sets Technical product name */
        TechnicalProductName: string;
        /** Gets or sets Technical product specification name */
        TechnicalProductSpecName: string;
        /** Gets or sets Technical access start date */
        StartDate: Date;
        /** Gets or sets Technical access end date */
        EndDate: Date;
        /** Gets or sets User reference. */
        UserRef: string;
        /** Gets or sets Billing code. */
        BillingCode: string;
        /** Gets or sets a flag indicates if defined by Technical Inventory and used by Provisioning to determine if the User must be createdor if he already exists on the platform. */
        IsUserImpacted: boolean;
        /** Gets or sets Subsidiary code */
        SubsidiaryCode: string;
        /** Gets or sets Duration of the conference. */
        Duration: number;
        /** Gets or sets topic of the conference. */
        Topic: string;
        /** Gets or sets the flag indicating whether provisioning is required. */
        IsProvisioningRequired: boolean;
        /** Gets or sets the integration link. */
        IntegrationLink: string;
        /** Getss whether this access can be used to create OTP accesses.It is true if the access is permanent and the product supports OTP. */
        CanCreateOTP: boolean;
        /** Gets or sets the commercial name of the access' technical product specification. */
        CommercialProductName: string;
        /** Gets or sets Subdomain identifier. Used in mapping referential constraint. */
        SubdomainId: number;
        /** Gets or sets User identifier. Used in mapping referential constraint. */
        UserId: number;
        /** Gets or sets Subsidiary of the user */
        UserSubsidiary: string;
        /** Gets or sets DomainSpecName of the user */
        DomainSpecName: string;
        /** Value of the conference type. */
        ConferenceType: string;
        /** Indicates if the access will be hidden for One Portal users. */
        IsHidden: boolean;
        /** Gets or sets the access status. */
        Status: string;
    }
}

declare namespace bluesky.core.models.technicalData {
    import UserAccountHeaderDto = account.IUserAccountHeaderDto;
    interface ITechnicalAccessDto extends models.IOrderManagementEntityDto {
        /** Value of the technical access type enumeration. */
        TechnicalAccessType: string;
        /** Gets or sets Name of the Access, generated by TI. */
        AccessName: string;
        /** Gets or sets Conference reference */
        ConferenceRef: string;
        /** Gets or sets Domain name */
        DomainName: string;
        /** Gets or sets a flag indicates if is one time event */
        IsOneTime: boolean;
        /** Gets or sets Technical product name */
        TechnicalProductName: string;
        /** Gets or sets Technical product specification name */
        TechnicalProductSpecName: string;
        /** Gets or sets Technical access start date */
        StartDate: Date;
        /** Gets or sets Technical access end date */
        EndDate: Date;
        /** Gets or sets User reference. */
        UserRef: string;
        /** Gets or sets Billing code. */
        BillingCode: string;
        /** Gets or sets a flag indicates if defined by Technical Inventory and used by Provisioning to determine if the User must be createdor if he already exists on the platform. */
        IsUserImpacted: boolean;
        /** Gets or sets Subsidiary code */
        SubsidiaryCode: string;
        /** Gets or sets Duration of the conference. */
        Duration: number;
        /** Gets or sets topic of the conference. */
        Topic: string;
        /** Gets or sets the flag indicating whether provisioning is required. */
        IsProvisioningRequired: boolean;
        /** Gets or sets the integration link. */
        IntegrationLink: string;
        /** Gets whether this access can be used to create OTP accesses.It is true if the access is permanent and the product supports OTP. */
        CanCreateOTP: boolean;
        /** Gets or sets the commercial name of the access' technical product specification. */
        CommercialProductName: string;
        /** Gets or sets Subdomain identifier. Used in mapping referential constraint. */
        SubdomainId: number;
        /** Gets or sets User identifier. Used in mapping referential constraint. */
        UserId: number;
        /** Gets or sets Subsidiary of the user */
        UserSubsidiary: string;
        /** Gets or sets DomainSpecName of the user */
        DomainSpecName: string;
        /** Value of the conference type. */
        ConferenceType: string;
        /** Indicates if the access will be hidden for One Portal users. */
        IsHidden: boolean;
        /** Identifier of the user account. */
        UserAccountUid: string;
        /** Identifier of the logo account. */
        LogoUid: string;
        /** Gets or sets the access status. */
        Status: string;
        /** Gets or sets User */
        UserAccount: UserAccountHeaderDto;
        /** Gets or sets parent subdomain. */
        Subdomain: technicalData.ISubdomainDto;
        /** Gets List of service platforms */
        ServicePlatforms: technicalData.IServicePlatformDto[];
        /** Gets AccessAccount characteristics */
        AccessCharacteristics: technicalData.IAccessCharacteristicDto[];
        /** DDIs linked to the Audio Access, inherited from the subdomain or from the domain. */
        DirectDialIns: technicalData.IDirectDialInDto[];
    }
}

declare namespace bluesky.core.models.technicalData {
    /** Defines specifications (templates) for TechnicalOptions. */
    interface ITechnicalOptionSpecDto extends models.IResourceBase {
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

declare namespace bluesky.core.models.technicalData {
    /** Defines specifications (templates) for TechnicalProducts. */
    interface ITechnicalProductSpecificationDto extends models.IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets name of the Technical Product Specification */
        Name: string;
        /** Gets List of technical options specifications */
        TechnicalOptionSpecs: technicalData.ITechnicalOptionSpecDto[];
    }
}

declare namespace bluesky.core.models.technicalData {
    /** A TechnicalProduct is the technical view of a CommercialProduct subscribed by a customer.
    * It can be atomic (one commercial product is corresponding to one technicalproduct) or composite (one commercial product is decomposed in severaltechnical products).If a Customer has several subscriptions for the same Technical Product, severalTechnical Products will be instantiated.A technical product has its own characteristics and values (thus overwritingDomain Characteristic values) */
    interface ITechnicalProductDto extends models.IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets Name of the Technical Product */
        Name: string;
        /** Gets or sets Technical product status. */
        TechnicalProductStatus: string;
        /** Technical Product Specification.Inverse navigation. */
        TPSpecification: technicalData.ITechnicalProductSpecificationDto;
        /** List of subdomains. */
        Subdomains: technicalData.ISubdomainDto[];
    }
}

declare namespace bluesky.core.models.technicalData {
    /** TerminatingNumber. */
    interface ITerminatingNumberDto extends models.IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Platform Number */
        PlatformNumber: string;
        /** Gets or sets the service platform name */
        ServicePlatformName: string;
        /** Gets or sets the service platform spec name */
        ServicePlatformSpecName: string;
        /** Gets or sets the phone kind */
        PhoneKind: string;
    }
}

declare namespace bluesky.core.models.technicalData {
    /** This resource describes microsites for WebEx.It may be shared between several Logos or dedicated to one Logo. */
    interface IUrlDto extends models.IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets value of the URL. */
        UrlValue: string;
        /** Gets or sets the administrator login to connect to the URL. */
        Login: string;
        /** Gets or sets administrator password to connect to the URL. */
        Password: string;
        /** Gets or sets URL type. */
        UrlType: string;
        /** Gets or sets site name. */
        SiteName: string;
        /** Gets or sets the expiration date. */
        ExpirationDate: Date;
        /** Gets or sets the provider. */
        Provider: string;
        /** Gets or sets required action on URL. */
        UrlAction: string;
    }
}

declare namespace bluesky.core.models.technicalData {
    /** This entity contains the information necessary to configure, modify an access web conference for a user. Web Conference can be Anywhere, Livemeeting or WebEx. */
    interface IWebAccessDto extends technicalData.ITechnicalAccessDto {
        /** Name of access whose category is audio */
        AudioAccessName: string;
        /** Password to access to the web conference.Usually, it is the participant or moderator PIN Code. */
        Password: string;
        /** Login to access to the conference. By default it will be user email information.If this information is not available, it will be the Web login. */
        WebLoginAlias: string;
        /** WebLogin which is provided by the "Audio platform". */
        WebLoginTechnical: string;
        /** Anywhere OneClick URL. */
        OneClickURL: string;
        /** Anywhere Participant OneClick URL. */
        ParticipantOneClickURL: string;
        /** List of integrated audio accesses. */
        IntegratedAudioAccesses: technicalData.IIntegratedAudioAccessDto[];
    }
}

declare namespace bluesky.core.models.quote {
    /** Model for the approval decision definition */
    interface IApprovalDecisionDefinition {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the approver login. */
        ApproverLogin: string;
        /** Gets or sets the approver display name. */
        ApproverDisplayName: string;
        /** Gets or sets the approver decision. */
        Decision: boolean;
        /** Gets or sets the approval decision date. */
        Date: Date;
        /** Gets or sets a decision comment. */
        Comment: string;
        /** Gets or sets IsLastIterationDecision flag. */
        IsLastIterationDecision: boolean;
        /** Gets the UserRole. */
        UserRoleValue: number;
    }
}

declare namespace bluesky.core.models.quote {
}

declare namespace bluesky.core.models.quote {
    /** DTO of an export parameter. */
    interface IExportParameterDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the export format. */
        ExportFormat: string;
        /** Gets or sets the export language. */
        ExportLanguage: string;
        /** Gets or sets the template name. */
        TemplateName: string;
        /** Gets or sets the template path. */
        TemplatePath: string;
        /** Gets or sets the quote export id. */
        QuoteExportId: number;
        /** Gets or sets the quote export. */
        QuoteExport: IQuoteExportDto;
    }
}

declare namespace bluesky.core.models.quote {
    /** Model for On Demand Information definition */
    interface IOdpInfoDefinition {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the Unit. */
        Unit: number;
    }
}

declare namespace bluesky.core.models.quote {
    /** Model for Quote definition */
    interface IQuoteDefinition {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the label. */
        Label: string;
        /** Gets or sets the name. */
        Name: string;
        /** Gets or sets the owner first name. */
        OwnerFirstName: string;
        /** Gets or sets the owner last name. */
        OwnerLastName: string;
        /** Gets or sets the owner login. */
        OwnerLogin: string;
        /** Gets or sets the quote creation date. */
        CreationDate: Date;
        /** Gets or sets the contract start date. */
        ContractStartDate: Date;
        /** Gets or sets the duration. */
        Duration: number;
        /** Gets or sets the quote status value. */
        QuoteStatusValue: number;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.QuoteType value. */
        QuoteTypeValue: number;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.BusinessUnit value. */
        BusinessUnitValue: string;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.Currency value. */
        CurrencyValue: string;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.CustomerSize value. */
        CustomerSizeValue: string;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.SubsidiaryName value. */
        SubsidiaryNameValue: string;
        /** Gets or sets the name of the assigned logo. */
        AssignedLogo: string;
        /** Gets or sets the display name of the assigned logo. */
        AssignedLogoName: string;
        /** Gets or sets the notes. */
        Notes: string;
        /** Gets or sets the internal note. */
        InternalNote: string;
        /** Gets or sets the origin name, for addendum and migration. */
        OriginName: string;
        /** Gets or sets the sfa contract identifier. */
        SFAContractId: string;
        /** Gets or sets the name of the SFDC customer. */
        SFDCCustomerName: string;
        /** Gets or sets the sales account. */
        SalesAccount: string;
        /** Gets or sets the Sales Force Customer Account Id. */
        SFACustomerAccountId: string;
        /** Gets or sets the Sales Force Customer Account Name. */
        SFACustomerAccountName: string;
        /** Gets or sets the current approver. */
        CurrentApprover: string;
        /** Gets or sets the opportunity Id. */
        OpportunityId: string;
        /** Gets or sets the SFA quote Id. */
        SFAQuoteId: string;
        /** Gets or sets the related export parameter identifier. */
        ExportParameterId: number;
        /** Gets or sets the C And C ProductOffering Id. */
        ConferencingAndCollaborationProductOfferingId: number;
        /** Gets or sets the customized Rate schedules. */
        RateSchedules: IRateScheduleDefinition[];
        /** Gets or sets the Udrc units */
        UdrcUnits: IUdrcUnitDefinition[];
        /** Gets the related approval decisions for quote. */
        ApprovalDecisions: IApprovalDecisionDefinition[];
        /** Gets or sets the Supporting Product Offering Ids */
        SupportingProductOfferingIds: number[];
    }
}

declare namespace bluesky.core.models.quote {
    /** DTO of a quote export. */
    interface IQuoteExportDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the businessunit. */
        BusinessUnit: IMetraNetEnumerationDto;
        /** Gets or sets the subsidiary name. */
        SubsidiaryName: IMetraNetEnumerationDto;
    }
}

declare namespace bluesky.core.models.quote {
    import QuoteSubscriptionDto = models.subscription.IQuoteSubscriptionDto;
    /** Header DTO of a quote. */
    interface IQuoteHeaderDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the label. */
        Label: string;
        /** Gets or sets the name. */
        Name: string;
        /** Gets or sets the version.The version is updated when it enters an approval process.Mandatory for quote contracts, addendum and migration. */
        Version: number;
        /** Gets or sets the owner first name. */
        OwnerFirstName: string;
        /** Gets or sets the owner last name. */
        OwnerLastName: string;
        /** Gets or sets the owner login. */
        OwnerLogin: string;
        /** Gets or sets the creation date. */
        CreationDate: Date;
        /** Gets or sets the last modification date. */
        ModificationDate: Date;
        /** Gets the Arkadin.BlueSky.BSIC.Domain.ReferenceData.Enumeration.OM.QuoteStatus. */
        QuoteStatus: IOrderManagementEnumerationDto;
        /** Gets the Arkadin.BlueSky.BSIC.Domain.ReferenceData.Enumeration.OM.QuoteType. */
        QuoteType: IOrderManagementEnumerationDto;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.Currency. */
        Currency: IMetraNetEnumerationDto;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.SubsidiaryName. */
        SubsidiaryName: IMetraNetEnumerationDto;
        /** Gets or sets the sfa contract identifier. */
        SFAContractId: string;
        /** Gets or sets the name of the SFDC customer. */
        SFDCCustomerName: string;
        /** Gets or sets the C And C ProductOffering Id. */
        ConferencingAndCollaborationProductOfferingId: number;
        /** Quote's subscriptions. */
        QuoteSubscriptions: QuoteSubscriptionDto[];
    }
}

declare namespace bluesky.core.models.quote {
    /** Dto for quote work items summary.Returns information about the number of quotes for each type of action to perform. */
    interface IQuoteWorkItemsSummaryDto extends IResourceBase {
        /** Gets or sets the number of quotes in pending status. */
        QuotesPendingCount: number;
        /** Gets or sets the number of quotes in approval in progress status. */
        QuotesUnderApprovalCount: number;
        /** Gets or sets the number of quotes to approve by the authenticated user. */
        QuotesToApproveCount: number;
        /** Gets or sets the number of quotes to work on. */
        TotalCount: number;
    }
}

declare namespace bluesky.core.models.quote {
    /** DTO of a quote. */
    interface IQuoteDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the label. */
        Label: string;
        /** Gets or sets the name. */
        Name: string;
        /** Gets or sets the version.The version is updated when it enters an approval process.Mandatory for quote contracts, addendum and migration. */
        Version: number;
        /** Gets or sets the owner first name. */
        OwnerFirstName: string;
        /** Gets or sets the owner last name. */
        OwnerLastName: string;
        /** Gets or sets the owner login. */
        OwnerLogin: string;
        /** Gets or sets the creation date. */
        CreationDate: Date;
        /** Gets or sets the last modification date. */
        ModificationDate: Date;
        /** Gets or sets the effective date. */
        EffectiveDate: Date;
        /** Gets or sets the contract start date. */
        ContractStartDate: Date;
        /** Gets or sets the duration. */
        Duration: number;
        /** Gets the Arkadin.BlueSky.BSIC.Domain.ReferenceData.Enumeration.OM.QuoteStatus. */
        QuoteStatus: IOrderManagementEnumerationDto;
        /** Gets the Arkadin.BlueSky.BSIC.Domain.ReferenceData.Enumeration.OM.QuoteType. */
        QuoteType: IOrderManagementEnumerationDto;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.BusinessUnit. */
        BusinessUnit: IMetraNetEnumerationDto;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.Currency. */
        Currency: IMetraNetEnumerationDto;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.CustomerSize. */
        CustomerSize: IMetraNetEnumerationDto;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.SubsidiaryName. */
        SubsidiaryName: IMetraNetEnumerationDto;
        /** Gets or sets the name of the assigned logo. */
        AssignedLogo: string;
        /** Gets or sets the display name of the assigned logo. */
        AssignedLogoName: string;
        /** Gets or sets the notes. */
        Notes: string;
        /** Gets or sets the internal note. */
        InternalNote: string;
        /** Gets or sets the origin name, for addendum and migration. */
        OriginName: string;
        /** Gets or sets the sfa contract identifier. */
        SFAContractId: string;
        /** Gets or sets the name of the SFDC customer. */
        SFDCCustomerName: string;
        /** Gets or sets the sales account. */
        SalesAccount: string;
        /** Gets or sets the current approver. */
        CurrentApprover: string;
        /** Gets or sets the opportunity Id. */
        OpportunityId: string;
        /** Gets or sets the SFA quote Id. */
        SFAQuoteId: string;
        /** Gets or sets the Sales Force Customer Account Id. */
        SFACustomerAccountId: string;
        /** Gets or sets the Sales Force Customer Account Name. */
        SFACustomerAccountName: string;
        /** Gets or sets the C And C ProductOffering Id. */
        ConferencingAndCollaborationProductOfferingId: number;
        /** Gets or sets the export parameter id. */
        ExportParameterId: number;
    }
}

declare namespace bluesky.core.models.quote {
    /** Model for Rate Entry definition */
    interface IRateEntryDefinition {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the identifier of the rate schedule linked to the rate entry. */
        RateScheduleId: number;
        /** Gets or sets the rate entry type. */
        RateEntryType: string;
        /** Gets or sets the rate entry index. */
        Index: number;
        /** Gets or sets rating key */
        RatingKey: string;
        /** Gets or sets the rate entry audit. */
        Audit: number;
        /** Gets or sets the atomic target name priceable item id. */
        AtomicTargetNameId: number;
        /** Gets or sets the compound target name product offering id. */
        CompoundTargetNameId: number;
        /** Gets or sets the AuxiliaryPricingModel enumeration value */
        AuxiliaryPricingModelValue: string;
        /** Gets or sets the ParameterDataType enumeration value */
        ParameterDataTypeValue: string;
        /** Gets or sets the ProductCategory enumeration value */
        ProductCategoryValue: string;
        /** Gets or sets the OrderEntryDisplayMode enumeration value */
        OrderEntryDisplayModeValue: string;
        /** Gets or sets the ElementType enumeration value */
        ElementTypeValue: string;
        /** Gets or sets the element name. */
        ElementName: string;
        /** Gets or sets the display order. */
        DisplayOrder: number;
        /** Gets or sets the is required flag. */
        IsRequired: boolean;
        /** Gets or sets the is selected flag. */
        IsSelected: boolean;
        /** Gets or sets the is default flag. */
        IsDefault: boolean;
        /** Gets or sets the Parameter Enumerator. */
        ParameterEnumerator: string;
        /** Gets or sets the Parameter Default Value. */
        ParameterDefaultValue: string;
        /** Gets or sets Is Value Required.selected */
        IsValueRequired: boolean;
        /** Gets or sets Parameter Value. */
        ParameterValue: string;
        /** Gets or sets Is User Displayed. */
        IsUserDisplayed: boolean;
        /** Gets or sets Is User Over Writable. */
        IsUserOverWritable: boolean;
        /** Gets or sets Is Selfcare Manageable. */
        IsSelfcareManageable: boolean;
        /** Gets or sets the IsSelfcareDisplayable. */
        IsSelfcareDisplayable: boolean;
        /** Gets or sets IsAdminSelfcareManageable. */
        IsAdminSelfcareManageable: boolean;
        /** Gets or sets  Is Invoice Printable. */
        IsInvoicePrintable: boolean;
        /** Gets or sets Is Welcome Pack Printable. */
        IsWelcomePackPrintable: boolean;
        /** Gets or sets the Technical Spec. */
        TechnicalSpec: string;
        /** Gets or sets Technical Instance ID. */
        TechnicalInstanceId: string;
        /** Gets or sets ODPInfo */
        ODpInfo: bluesky.core.models.quote.IOdpInfoDefinition;
        /** Gets or sets the SubsidiaryName value. */
        SubsidiaryNameValue: string;
        /** Gets or sets Number of PO. */
        Number: number;
        /** Gets or sets the Currency value. */
        CurrencyValue: string;
        /** Gets or sets the BusinessUnit value. */
        BusinessUnitValue: string;
        /** Gets or sets the CustomerSize value. */
        CustomerSizeValue: string;
        /** Gets or sets the ServiceType value. */
        ServiceTypeValue: string;
        /** Gets or sets the ServiceUnit value. */
        ServiceUnitValue: string;
        /** Gets or sets User tariff group to band mapping */
        UseTariffGroupToBandMapping: boolean;
        /** Gets or sets Use band rates */
        UseBandRates: boolean;
        /** Gets or sets  Use  bridging rates */
        UseBridgingRates: boolean;
        /** Gets or sets Use surcharge rates */
        UseSurchargeRates: boolean;
        /** Gets or sets the MainPricingModel enumeration value */
        MainPricingModelValue: string;
        /** Gets or sets product group name. */
        ProductGroupName: string;
        /** Gets or sets the ProductName value. */
        ProductNameValue: string;
        /** Gets or sets the DurationRoundingStrategy value. */
        DurationRoundingStrategyValue: string;
        /** Gets or sets the Retail Product Group Name Rate Entry */
        RetailProductGroupNameRateEntryId: number;
        /** Gets or sets is retail selected */
        IsRetailSelected: boolean;
        /** Gets or sets the Partner Product Group Name Rate Entry */
        PartnerProductGroupNameRateEntryId: number;
        /** Gets or sets is partner selected */
        IsPartnerSelected: boolean;
        /** Gets or sets the SourceCountryCode value. */
        SourceCountryCodeValue: string;
        /** Gets or sets the DestinationCountryCode value. */
        DestinationCountryCodeValue: string;
        /** Gets or sets the DirectDialInType value. */
        DirectDialInTypeValue: string;
        /** Gets or sets the PhoneKind value. */
        PhoneKindValue: string;
        /** Gets or sets Source region. */
        SourceRegion: string;
        /** Gets or sets band. */
        Band: string;
        /** Gets or sets Cluster. */
        Cluster: string;
        /** Gets or sets Tariff Group Retail / Partner Band Rate Per Minute. */
        TGRetailBandRatePerMinute: number;
        /** Gets or sets Use Tariff Group Retail / Partner Rate. */
        IsUseTariffGroupRetailRate: boolean;
        /** Gets or sets Tariff Group Retail / Partner Band Rate Per Minute. */
        TGPartnerBandRatePerMinute: number;
        /** Gets or sets Use Tariff Group Retail / Partner Rate. */
        IsUseTariffGroupPartnerRate: boolean;
        /** Gets or sets Retail band rate per minute */
        RetailBandRatePerMinute: number;
        /** Gets or sets Partner band rate per minute */
        PartnerBandRatePerMinute: number;
        /** Gets or sets Retail bridging rate per minute */
        RetailBridgingRatePerMinute: number;
        /** Gets or sets Partner bridging rate per minute */
        PartnerBridgingRatePerMinute: number;
        /** Gets or sets the CountryCode value. */
        CountryCodeValue: string;
        /** Gets or sets Zone. */
        Zone: string;
        /** Gets or sets Retail surcharge rate per minute */
        RetailSurchargeRatePerMinute: number;
        /** Gets or sets Partner surcharge rate per minute */
        PartnerSurchargeRatePerMinute: number;
        /** Gets or sets Minute threshold start. */
        MinuteThresholdStart: number;
        /** Gets or sets Minute threshold end. */
        MinuteThresholdEnd: number;
        /** Gets or sets Retail discount percentage */
        RetailDiscountPercentage: number;
        /** Gets or sets Partner discount percentage */
        PartnerDiscountPercentage: number;
        /** Gets or sets the IncludedCharges value. */
        IncludedChargesValue: string;
        /** Gets or sets Number of free minutes */
        NumberOfFreeMinutes: number;
        /** Gets or sets Room size */
        RoomSize: number;
        /** Gets or sets the billed hosts percentage. */
        BilledHostsPercentage: number;
        /** Gets or sets is converted. */
        IsConverted: boolean;
        /** Gets or sets the number of minimum active hosts. */
        MinimumActiveHosts: number;
        /** Gets or sets the number of purchased licenses. */
        PurchasedLicenses: number;
        /** Gets or sets the port overage rate. */
        PortOverageRate: number;
        /** Gets or sets the LicenseFeePriceableItemId */
        LicenseFeePriceableItemId: number;
        /** Gets or sets the LicenseFeeCalculationMode value. */
        LicenseFeeCalculationModeValue: string;
        /** Gets or sets Service type group */
        ServiceTypeGroup: number;
        /** Gets or sets the MiscChargeType value. */
        MiscChargeTypeValue: string;
        /** Gets or sets Rate per unit */
        RatePerUnit: number;
        /** Gets or sets Flat rate */
        FlatRate: number;
        /** Gets or sets the OptionChargeType value. */
        OptionChargeTypeValue: string;
        /** Non recurring charge amount */
        NRcAmount: number;
        /** Gets or sets Recurring charge amount */
        RCAmount: number;
        /** Gets or sets number of units. */
        UnitValue: number;
        /** Gets or sets Unit amount */
        UnitAmount: number;
        /** Gets or sets base amount */
        BaseAmount: number;
        /** Gets or sets Flat unconditional discount amount */
        FlatUnconditionalDiscountAmount: number;
        /** Gets or sets Flat discount amount */
        FlatDiscountAmount: number;
        /** Gets or sets DiscountPercent */
        DiscountPercent: number;
        /** Gets or sets Qualifier condition. */
        Qualifier: number;
        /** Gets or sets the QualifierOperator value. */
        QualifierOperatorValue: string;
        /** Commitment start date. */
        CommitmentStartDate: Date;
        /** Gets or sets the CommitmentFrequency value. */
        CommitmentFrequencyValue: string;
        /** Commitment amount. */
        CommitmentAmount: number;
        /** Gets or sets the CancellationFeePolicy value. */
        CancellationFeePolicyValue: string;
        /** Gets or sets the frequency value. */
        FrequencyValue: string;
        /** Global discount threshold. */
        Threshold: number;
        /** Global discount discount percentage. */
        DiscountPercentage: number;
        /** Gets or Sets Is Flat Rate Used */
        IsFlatRateUsed: boolean;
        /** Gets or Sets Is Unit Rate Used */
        IsUnitRateUsed: boolean;
    }
}

declare namespace bluesky.core.models.quote {
    /** Model for Rate Schedule definition */
    interface IRateScheduleDefinition {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the id of the quote. */
        QuoteId: number;
        /** Gets or sets the id of a parameter table. */
        PTId: number;
        /** Gets or sets the name of the Parameter Table. */
        PTName: string;
        /** Gets or sets the rate schedule type. */
        RateScheduleType: string;
        /** Gets or sets the start date. */
        StartDate: Date;
        /** Gets or sets the end date. */
        EndDate: Date;
        /** Gets or sets the priceable item id. */
        PriceableItemId: number;
        /** Gets or sets the rate entries. */
        RateEntries: IRateEntryDefinition[];
    }
}

declare namespace bluesky.core.models.quote {
    /** DTO of an sign off decision. */
    interface ISignOffDecisionDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the approver login. */
        ApproverLogin: string;
        /** Gets or sets the approver display name. */
        ApproverDisplayName: string;
        /** Gets or sets the approver decision. */
        Decision: boolean;
        /** Gets or sets the approval decision date. */
        SignOffDate: Date;
        /** Gets or sets a decision comment. */
        Comment: string;
        /** Gets the UserRole. */
        UserRole: IOrderManagementEnumerationDto;
    }
}

declare namespace bluesky.core.models.quote {
    /** Model for Quote definition */
    interface ISimpleQuoteCreation {
        /** Gets or sets the label. */
        Label: string;
        /** Gets or sets the contract start date. */
        ContractStartDate: Date;
        /** Gets or sets the duration. */
        Duration: number;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.BusinessUnit value. */
        BusinessUnitValue: string;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.Currency value. */
        CurrencyValue: string;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.CustomerSize value. */
        CustomerSizeValue: string;
        /** Gets or sets the Arkadin.BlueSky.BSIC.Domain.ContractDataSupport.Quote.SubsidiaryName value. */
        SubsidiaryNameValue: string;
        /** Gets or sets the notes. */
        Notes: string;
        /** Gets or sets the name of the SFDC customer. */
        SFDCCustomerName: string;
        /** Gets or sets the sales account. */
        SalesAccount: string;
        /** Gets or sets the Sales Force Customer Account Id. */
        SFACustomerAccountId: string;
        /** Gets or sets the Sales Force Customer Account Name. */
        SFACustomerAccountName: string;
        /** Gets or sets the opportunity Id. */
        OpportunityId: string;
        /** Gets or sets the SFA quote Id. */
        SFAQuoteId: string;
        /** Gets or sets the C And C ProductOffering Id. */
        ConferencingAndCollaborationProductOfferingId: number;
    }
}

declare namespace bluesky.core.models.quote {
    /** Model for udrc unit definition */
    interface IUdrcUnitDefinition {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Unit name. */
        UnitName: string;
        /** Unit value. */
        UnitValue: number;
        /** Gets or sets the UnitDependentRecurringCharge (PI) identifier. */
        UnitDependentRecurringChargePriceableItemId: number;
    }
}

declare namespace bluesky.core.models.userManagement {
    /** Dto of an application work items summary.The summary contains for a specific application a summarized view of the work items.Each work item contains the number of the elements to monitor for a specific type of action to perform. */
    interface IApplicationWorkItemsSummaryDto extends models.IResourceBase {
        /** Gets or sets the list of work items to track. */
        WorkItemHeaders: userManagement.IWorkItemHeaderDto[];
        /** Gets or sets the total number of monitored elements. */
        TotalCount: number;
    }
}

declare namespace bluesky.core.models.userManagement {
    /** DTO Header of a scope management (Aggregation of the BME CountryReference, SubsidiaryReference andCurrencyReference, defined in MN). */
    interface IScopeManagementHeaderDto extends models.IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the country name value. */
        CountryNameValue: string;
        /** Geo region enum value (EMEA, ...) from the BME CountryReference.  We miss this MetraNet enum, so for now, it is a string. */
        GeoRegion: string;
        /** Gets or sets the silo name from the BME SubsidiaryReference. */
        SiloName: string;
        /** Gets or sets the subsidiary code from the BME SubsidiaryReference. */
        SubsidiaryCode: string;
        /** Gets or sets the subsidiary name value. */
        SubsidiaryNameValue: string;
        /** Gets or sets the management subsidiary name value. */
        ManagementSubsidiaryNameValue: string;
    }
}

declare namespace bluesky.core.models.userManagement {
    /** DTO of a scope management (Aggregation of the BME CountryReference, SubsidiaryReference andCurrencyReference, defined in MN). */
    interface IScopeManagementDto extends models.IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Gets or sets the country name. */
        CountryName: string;
        /** Gets or sets the country name value. */
        CountryNameValue: number;
        /** Gets or sets the currency. */
        Currency: string;
        /** Gets or sets the currency value. */
        CurrencyValue: number;
        /** Geo region enum value (EMEA, ...) from the BME CountryReference.  We miss this MetraNet enum, so for now, it is a string. */
        GeoRegion: string;
        /** Gets or sets the management's subsidiary name. */
        ManagementSubsidiaryName: string;
        /** Gets or sets the management's subsidiary name value. */
        ManagementSubsidiaryNameValue: number;
        /** Gets or sets the navision instance. */
        NavisionInstance: string;
        /** Gets or sets the navision instance value. */
        NavisionInstanceValue: number;
        /** Gets or sets the partner account name from the BME SubsidiaryReference. */
        PartnerAccountName: string;
        /** Gets or sets the silo name from the BME SubsidiaryReference. */
        SiloName: string;
        /** Gets or sets the subsidiary code from the BME SubsidiaryReference. */
        SubsidiaryCode: string;
        /** Gets or sets the subsidiary name. */
        SubsidiaryName: string;
        /** Gets or sets the subsidiary name value. */
        SubsidiaryNameValue: number;
        /** Gets or sets the tax vendor.. */
        TaxVendor: string;
        /** Gets or sets the tax vendor value. */
        TaxVendorValue: number;
    }
}

declare namespace bluesky.core.models.userManagement {
    /** Informations about a user. */
    interface IUserInformationDto {
        /** File Name. */
        FirstName: string;
        /** Last Name. */
        LastName: string;
        /** DisplayName. */
        DisplayName: string;
        /** Identifier of the User. */
        UserIdentifier: string;
        /** Email. */
        Email: string;
        /** Phoe number. */
        PhoneNumber: string;
    }
}

declare namespace bluesky.core.models.userManagement {
    interface IUserRoleEntryDto {
        Name: string;
        Role: string;
        Silo: string;
    }
}

declare namespace bluesky.core.models.userManagement {
    interface IUserSsoDto extends models.IResourceBase {
        Subsidiary: string;
        Owners: string[];
        UserRoleEntry: userManagement.IUserRoleEntryDto;
        ActiveDirectoryGroups: userManagement.IUserRoleEntryDto[];
        Regions: string[];
        UserDisplayName: string;
        /** Gets or sets the user's identifier in the active directory. */
        UserIdentifier: string;
        Countries: string[];
        Subsidiaries: string[];
    }
}

declare namespace bluesky.core.models.userManagement {
    /** Header Dto of a work item.A work item contains a type and number of elements to be monitored for a connected user (e.g.: 7 quotes to approve). */
    interface IWorkItemHeaderDto extends models.IResourceBase {
        /** Gets or sets the identifier of the work item.Used to identify the action to be performed by the user. */
        Identifier: string;
        /** Gets or sets the name of the work item.The name is the displayed value of the identifier. */
        Name: string;
        /** Gets or sets the number of monitored elements. */
        Count: number;
    }
}

declare namespace bluesky.core.models.subscription {
    /** This entity links a quote, a billing account, and the resulting subscription */
    interface IQuoteSubscriptionDto extends IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Quote identifier */
        QuoteId: number;
        /** Subscription identifier */
        SubscriptionId: number;
        /** GroupSubscription identifier */
        GroupSubId: number;
        /** BillingAccount identifier */
        BillingAccountUserName: string;
        /** BillingAccount customer node name */
        BillingAccountCustomerNodeName: string;
    }
}

declare namespace bluesky.core.models.subscription {
    /** DTO of an option attached to a subscription. */
    interface ISubscriptionOptionDto {
        /** Name of the Option. */
        Name: string;
        /** Indicate in which product category the option is defined. */
        ProductCategory: string;
        /** Technical spec value of the Technical Option. */
        TechnicalSpec: string;
        /** Default value chosen for the option on the subscription. */
        Value: string;
        /** Type of the value */
        ValueType: string;
    }
}

declare namespace bluesky.core.models.subscription {
    /** DTO of a product attached to a subscription. */
    interface ISubscriptionProductDto {
        /** Element name of the product. */
        Name: string;
        /** Name of the Technical Product Specification. */
        TechnicalProductSpecName: string;
        /** Identifier of the Technical Product in the Technical Inventory. */
        TechnicalProductId: string;
    }
}

declare namespace bluesky.core.models.subscription {
    /** Header DTO of a subscription summary.
    * A subscription is a product offering sold to a Customer and applied to a single subscriber Billing account. */
    interface ISubscriptionSummaryHeaderDto extends models.IResourceBase {
        /** Offer display name of the subscription. */
        DisplayName: string;
        /** Identifier of the subscription defined into MetraNet. */
        GroupSubscriptionId: number;
        /** List of products linked to the subscription. */
        Products: subscription.ISubscriptionProductDto[];
    }
}

declare namespace bluesky.core.models.subscription {
    /** DTO of a subscription summary.
    * A subscription is a product offering sold to a Customer and applied to a single subscriber Billing account. */
    interface ISubscriptionSummaryDto extends models.IResourceBase {
        /** Offer display name of the subscription. */
        DisplayName: string;
        /** Identifier of the subscription defined into MetraNet. */
        GroupSubscriptionId: number;
        /** Identifier of the billing account owner of the subscription. */
        BillingAccountUid: string;
        /** Identifier of the billing account's logo. */
        LogoUid: string;
        /** List of products linked to the subscription. */
        Products: subscription.ISubscriptionProductDto[];
        /** subscription options. */
        Options: subscription.ISubscriptionOptionDto[];
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of an access view.Contains technical information for each user's access instance. */
    interface IAccessViewDto extends core.models.IResourceBase {
        /** Gets or sets the login for Web products. */
        AccessLogin: string;
        /** Gets or sets the password for credential requirements on service platform (= pin moderator). */
        AccessPassword: string;
        /** Gets or sets AccessAccount personal information numberUsed by user to access the service. */
        AudioModeratorPIN: string;
        /** Gets or sets the Personal Information Number for the audio participant. */
        AudioParticipantPIN: string;
        /** Gets or sets the information provided by the customer at creation date. */
        BillingCode: string;
        /** Gets or sets the billing reference, additional information at access level to be displayed in the invoice. */
        BillingRef: string;
        /** Gets or sets the comment. */
        Comment: string;
        /** Gets or sets the external conference reference. */
        ExternalConferenceReference: string;
        /** Gets or sets the conference reference external name for audio. */
        NetworkElementAccessName: string;
        /** Gets or sets the conference reference for audio access, microsite and login for WebEx. */
        NetworkElementAccessReference: string;
        /** Gets or sets the bridge number (if audio), WebEx platform, ANW platform. */
        NetworkElementReference: string;
        /** Gets or sets the technical environment. */
        NetworkElementTechnicalEnvironment: string;
        /** Gets or sets the Topic. */
        Topic: string;
        /** Gets or sets the access product name. */
        AccessProductName: string;
        /** Gets the access category. */
        AccessCategory: string;
        /** Gets the access type. */
        AccessType: string;
        /** Gets the conference type. */
        ConferenceType: string;
    }
}

declare namespace bluesky.core.models.account {
    interface IBillToContactViewDto extends models.account.IContactViewDto {
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a billing view.Contains informations related to a billing account and financial processing. */
    interface IBillingViewDto extends models.IResourceBase {
        /** Gets or sets the Arkadin bank account details (defined in MT SDD). */
        ArkadinBankAccountDetailsId: string;
        /** Gets or sets a value indicating whether the related billing account is a GSA account with a unique central invoice. */
        IsCentralBilling: boolean;
        /** Gets or sets a value indicating whether a cover page is required. */
        IsCoverPageRequired: boolean;
        /** Gets or sets a value indicating whether a customer purchase order is mandatory. */
        IsPurchaseOrderMandatory: boolean;
        /** Gets or sets the username of a legal entity node in the same account hierarchy (children of the same Logo). */
        MasterLegalEntityUserName: string;
        /** Gets or sets the expiry date for the customer purchase order. */
        PurchaseOrderExpiryDate: Date;
        /** Gets or sets the customer purchase order reference. */
        PurchaseOrderReference: string;
        /** Gets or sets the registration number in the country of the account (i.e. SIRET/RCS numbers in France). */
        RegistrationNumber: string;
        /** Gets or sets the value of the corresponding opportunity file (SFDC externalID). */
        SalesForceId: string;
        /** Gets or sets the billing subsidiary code. */
        SubBillingCode: string;
        /** Invoice minimum amount. */
        InvoiceMinimumAmount: number;
        /** Indicates if the general admin fee must be applied. */
        GeneralAdminFeeApplied: boolean;
        /** Indicates if the paper based invoice fee must be applied. */
        PaperBasedInvoiceFeeApplied: boolean;
        /** Gets the subsidiary managing the invoice. */
        BillingSubsidiary: string;
        /** Gets the Collaboration Usage Details template. */
        CUDTemplate: string;
        /** Gets an Event Usage Details template. */
        EUDTemplate: string;
        /** Gets the invoice delivery method. */
        InvoiceDeliveryMethod: string;
        /** Gets the invoice language. */
        InvoiceLanguage: string;
        /** Gets the invoice output format. */
        InvoiceOutputFormat: string;
        /** Gets the legal entity inheritance. */
        LegalEntityInheritance: string;
        /** Gets the subsidiary managing thebilling account if necessary from a provisioning point of view. */
        ManagementSubsidiary: string;
        /** Gets the navision instance where this customer billing data is reported to. */
        NavisionInstance: string;
        /** Gets the payment term code. */
        PaymentTermCode: string;
        /** Gets the print house in charge of invoice generation. */
        PrintHouse: string;
        /** Gets the subsidiary managing the revenue fo the current billing account if different from the billing subsidiary. */
        RevenueSubsidiary: string;
        /** IST (Invoice Suppression Threshold) IMA (Invoice Minimum Amount) information. */
        IstimaInfo: account.IIstimaInfoDto;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a common view.Contains attributes shared by all of the accounts. */
    interface ICommonViewDto extends bluesky.core.models.IResourceBase {
        /** Gets or sets the comment to be manually filled by CSR, SalesAdmin... to provide whatever additional information required. */
        Comment: string;
        /** Gets or sets the requester to be manually filled by CSR, SalesAdmin... to provide whatever additional information required. */
        StatusRequestedBy: string;
        /** Gets or sets the user who created the account. */
        CreatedBy: string;
        /** Gets or sets the account creation date. */
        CreatedDate: Date;
        /** Gets or sets the customer node name. */
        CustomerNodeName: string;
        /** Gets or sets the user name of the logo present in the account hierarchy. */
        LogoUserName: string;
        /** Gets or sets the user who last modified the account. */
        ModifiedBy: string;
        /** Gets or sets the account last modification date. */
        ModifiedDate: Date;
        /** Gets or sets the assigned sales account. */
        SalesAccountAssigned: string;
        /** Gets or sets the display name of the assigned sales account. */
        SalesAccountDisplayName: string;
        /** Gets or sets the communication Opt-in. Used to sign-up to receive email notifications. */
        CommunicationOptIn: boolean;
        /** Gets or sets the partner external ID. */
        PartnerExternalId: string;
        /** Gets theorder status. */
        OrderStatus: string;
        /** Gets the effective management subsidiary. */
        EffectiveManagementSubsidiary: string;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a contact view.Contains contact and address information. */
    interface IContactViewDto extends core.models.IResourceBase {
        /** Gets or sets the name that may be filled in for invoicing further purposes. */
        Name1: string;
        /** Gets or sets the additionnal name that may be filled in for invoicing further purposes. */
        Name2: string;
        /** Gets or sets the address first line. */
        Address1: string;
        /** Gets or sets the address second line. */
        Address2: string;
        /** Gets or sets the address third line. */
        Address3: string;
        /** Gets or sets the city or town. */
        City: string;
        /** Gets or sets the the country code. */
        CountryCode: string;
        /** Gets or sets the e-mail address. */
        Email: string;
        /** Gets or sets the fax number. */
        FacsimileTelephoneNumber: string;
        /** Gets or sets the first name. */
        FirstName: string;
        /** Gets or sets the last name. */
        LastName: string;
        /** Gets or sets the local address first line. */
        LocalAddress1: string;
        /** Gets or sets the local address second line. */
        LocalAddress2: string;
        /** Gets or sets the local address third line. */
        LocalAddress3: string;
        /** Gets or sets the local city or town. */
        LocalCity: string;
        /** Gets or sets the local first name. */
        LocalFirstName: string;
        /** Gets or sets the local last name. */
        LocalLastName: string;
        /** Gets or sets the local middle initial. */
        LocalMiddleInitial: string;
        /** Gets or sets the local salutation. */
        LocalSalutation: string;
        /** Gets or sets the local state or province. */
        LocalState: string;
        /** Gets or sets the local county. */
        LocalCounty: string;
        /** Gets or sets the middle initial. */
        MiddleInitial: string;
        /** Gets or sets the telephone number. */
        PhoneNumber: string;
        /** Gets or sets the salutation.No academic information (Professor,...), no job title captured. */
        Salutation: string;
        /** Gets or sets the state or province. */
        State: string;
        /** Gets or sets the zip or postal code. */
        Zip: string;
        /** Gets or sets the company. */
        Company: string;
        /** Gets or sets the county: a region which has its own local government. */
        County: string;
        /** Gets the language. */
        CommunicationLanguage: string;
        /** Gets the contact type. */
        ContactType: string;
        /** Gets the country name. */
        CountryName: string;
        /** Gets the time zone identifier. */
        TimeZoneId: string;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a Dispatching view.Contains attributes related to account segmentation and dispatching. */
    interface IDispatchingViewDto extends models.IResourceBase {
        /** Gets or sets the cost center. */
        CostCenter: string;
        /** Gets or sets the first free criterion. */
        Dispatch1: string;
        /** Gets or sets the second free criterion. */
        Dispatch2: string;
        /** Gets the branch country. */
        BranchCountry: string;
        /** Gets the branch department. */
        BranchDepartment: string;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of an internal view.Contains the internal account information. */
    interface IInternalViewDto extends models.IResourceBase {
        /** Gets or sets a value indicating whether the is billable. */
        IsBillable: boolean;
        /** Gets or sets the name of the division associated with the account. */
        Division: string;
        /** Gets or sets a value indicating whether the  is a folder. */
        IsFolder: boolean;
        /** Gets or sets the answer to the security question. */
        SecurityAnswer: string;
        /** Gets or sets the status reason text. */
        StatusReasonOther: string;
        /** Gets or sets a value indicating whether the  is tax exempt. */
        IsTaxExempt: boolean;
        /** Gets or sets the tax exempt identifier. */
        TaxExemptId: string;
        /** Gets or sets the tax exemption start date. */
        TaxExemptStartDate: Date;
        /** Gets or sets the tax exemption end date. */
        TaxExemptEndDate: Date;
        /** Gets or sets the tax service address Pcode. */
        TaxServiceAddressPcode: number;
        /** Gets or sets the additional tax information */
        AdditionalTaxInformation: string;
        /** Gets or sets the Additional tax exemption. */
        AdditionalTax: boolean;
        /** Gets the currency. */
        Currency: string;
        /** Gets the invoice delivery method. */
        InvoiceDeliveryMethod: string;
        /** Gets the language. */
        Language: string;
        /** Gets the MetraTax country eligiblity. */
        MetraTaxCountryEligibility: string;
        /** Gets the MetraTax country zone. */
        MetraTaxCountryZone: string;
        /** Gets the MetraTax override band. */
        MetraTaxOverrideBand: string;
        /** Gets the payment method. */
        PaymentMethod: string;
        /** Gets the security question. */
        SecurityQuestion: string;
        /** Gets the status reason. */
        StatusReason: string;
        /** Gets the tax vendor. */
        TaxVendor: string;
        /** Gets the time zone identifier. */
        TimeZoneId: string;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of IST IMA Information.ISTIMA information.IST: Invoice Suppression Threshold.IMA: Invoice Minimum Amount. */
    interface IIstimaInfoDto extends models.IResourceBase {
        /** Product offering MetraNet identifier. */
        ProductOfferingMnId: number;
        /** Invoice Suppression Threshold from. */
        InvoiceSuppressionThresholdFrom: number;
        /** Invoice Suppression Threshold to. */
        InvoiceSuppressionThresholdTo: number;
        /** subscription identifier. */
        SubscriptionId: number;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a legal entity view.The Legal Entity view contains attributes related to Legal Entity setup. */
    interface ILegalEntityViewDto extends models.IResourceBase {
        /** Gets or sets the company registration number to National Commercial Board (ex: SIREN in France). */
        CommercialRegistrationNumber: string;
        /** Gets or sets the equivalent to EU tax registration number. */
        TaxRegistrationNumber: string;
        /** Gets or sets the billing subsidiary code. */
        SubBillingCode: string;
        /** Gets the billing currency. */
        BillingCurrency: string;
        /** Gets the subsidiary managing the billing subsidiaries of billing accounts (OE inheritance mechanism). */
        BillingSubsidiary: string;
        /** Gets the payment term. */
        PaymentTerm: string;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a local logo view.Contains attributes related to the local logo setup. */
    interface ILocalLogoViewDto extends core.models.IResourceBase {
        /** Gets the subsidiary managing the local Logo. */
        ManagementSubsidiary: string;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a logo view.Contains attributes related to the logo setup. */
    interface ILogoViewDto extends models.IResourceBase {
        /** Gets or sets a value indicating whether this logo is a GSA account with a unique central invoice. */
        IsCentralBilling: boolean;
        /** Gets the subsidiary managing the logo. */
        ManagementSubsidiary: string;
    }
}

declare namespace bluesky.core.models.account {
    /** Contains attributes related to the group and primary group. */
    interface IPrimaryGroupViewDto extends core.models.IResourceBase {
        /** Gets or sets a value indicating whether the request flow validation is activated. */
        IsRqstFlowValidationActivated: boolean;
        /** Gets the subsidiary managing the group or primary group. */
        ManagementSubsidiary: string;
    }
}

declare namespace bluesky.core.models.account {
    interface ITechnicalAdminContactViewDto extends account.IContactViewDto {
    }
}

declare namespace bluesky.core.models.account {
    interface IUserContactViewDto extends account.IContactViewDto {
        /** Gets or sets the external language, needed by the TI and the Provisioning. */
        ExternalLanguage: string;
        /** Gets or sets the external timezone, needed by the TI and the Provisioning. */
        ExternalTimeZone: string;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a user view.Contains attributes related to the user setup. */
    interface IUserViewDto extends models.IResourceBase {
        /** Gets or sets the information provided by the customer at creation date. */
        BillingCode: string;
        /** Gets or sets a flag indicating whether the user is a moderator. */
        IsModerator: boolean;
        /** Gets or sets the email of the user (Collab). */
        Login: string;
        /** Gets or sets the value of the corresponding opportunity file (SFDC externalID) in case of a TRIAL user/access creation only. */
        SalesForceId: string;
        /** Gets or sets the user first dispatch.Custom field used by the customer and displayed in One Portal (1st field). */
        UserDispatch1: string;
        /** Gets or sets user second dispatch.Custom field used by the customer and displayed in One Portal (2nd field). */
        UserDispatch2: string;
        /** Billing reference. */
        BillingRef: string;
        /** Gets the Selfcare admin level.Defines the hierarchy node under which the user is admin: Logo, Local Logo, Billing account, Primary Group, and None for simple users. */
        SelfCareRelation: string;
        /** Gets the Selfcare role.Defines which role should have the user in the Selcare application (Lounge).- User can manage his Meetings and his Profile.- Admin have same rights and can manage Users (integrated self-provisioning options to create, manage and delete accounts). */
        SelfCareRole: string;
        /** If specified, gets or sets the list of the identifiers of the accounts for which the user has admin privileges. */
        AdditionalAdministrationLevels: string[];
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of an access.The AccessAccount is the customer hierarchy node that represents the instance of asubscribed product for a given user (i.e. the use  of a particular Arkadin orArkadin's supplier resource).It holds access identifier that allows connection, CDR guidance.It is linked to a unique service platform.It represents service end point - access to Arkadin conferencing infrastructure,provisioned in the network. */
    interface IAccessAccountDto extends bluesky.core.models.account.IAccountDto {
        /** Gets or sets the Alias of the access. */
        Alias: string;
        /** The AccessAccount view contains attributes storing technical information for each UserAccount's AccessAccount instance. */
        AccessView: bluesky.core.models.account.IAccessViewDto;
    }
}

declare namespace bluesky.core.models.account {
    /** Header DTO of an accountTODO MGA : inheriting from OrderManagementEntityDto is a hack, as we do not have custom DTOs for Accounts comming from OrderManagement DB. TOFIX when we don't have these entities saved in OM. */
    interface IAccountHeaderDto extends bluesky.core.models.IOrderManagementEntityDto {
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

declare namespace bluesky.core.models.account {
    /** DTO of an account.Base class holding MetraNet core account properties and identifiers.TODO MGA : inheriting from OrderManagementEntityDto is a hack, as we do not have custom DTOs for Accounts comming from OrderManagement DB. TOFIX when we don't have these entities saved in OM. */
    interface IAccountDto extends models.IOrderManagementEntityDto {
        /** Gets or sets the account type. */
        AccountType: string;
        /** Gets or sets the MetraNet identifier of the account. */
        MNId: number;
        /** Gets or sets the user name assigned to the account.TODO MGA : to be renamed to Uid : impacts on Proxies / HUB ? Is it acceptable or not ? */
        UserName: string;
        /** Gets or sets the parent account.TODO MGA : to be renamed to AncestorAccountUid : impacts on Proxies / HUB ? Is it acceptable or not ? */
        AncestorAccountUserName: string;
        /** Gets or sets the account status value. */
        AccountStatus: string;
        /** Gets or sets the payer username.TODO MGA : to be renamed to PayerUid : impacts on Proxies / HUB ? Is it acceptable or not ? */
        PayerUserName: string;
        /** Gets or sets the start date of the account. */
        AccountStartDate: Date;
        /** Gets or sets the end date of the account. */
        AccountEndDate: Date;
        /** Gets or sets the start date of the association with the current parent account (ancestor). */
        HierarchyStartDate: Date;
        /** Gets or sets the end date of the association with the current parent account (ancestor). */
        HierarchyEndDate: Date;
        /** Gets or sets the password used by the account to access MetraView site. */
        Password: string;
        /** Gets or sets the start date of the payment redirection with the current payer account. */
        PaymentStartDate: Date;
        /** Gets or sets the end date of the payment redirection with the current payer account. */
        PaymentEndDate: Date;
        /** Gets or sets the Internal view contains the Internal account information.It is required for all types of accounts. */
        InternalView: account.IInternalViewDto;
        /** Gets or sets the Common view gathers attributes shared by all of the Accounts. */
        CommonView: account.ICommonViewDto;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a billing account.The Billing account represents the billing point in the hierarchy.This is the account which collects all charges from itself and all sub-accounts.Billing account defines invoice currency, billing frequency and receives theinvoice.It is linked to an Arkadin subsidiary (this allows to identify the uniqueNavision instance that support the Billing account).By default the Billing account is the entity that support the subscriptions(exception for Event, trial accounts ...).Please note that in the Wholesaler case, the Billing account is a dummy(unknown by Navision, no invoice sent).Please note that in the trial account case, the Billing account is a dummy (forinternal use only). */
    interface IBillingAccountDto extends account.IAccountDto {
        /** Billing account view */
        BillingView: account.IBillingViewDto;
        /** The Contact view of type Bill-to contains the contact and address of a billable entity. */
        BillToView: account.IBillToContactViewDto;
        /** The  Contact view of type Ship-to contains the contact and address where the invoice is sent to. */
        ShipToView: account.IContactViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        TechnicalAdminContactView: account.ITechnicalAdminContactViewDto;
        /** The Contact view of type invoice carbon copy contains the additional contacts who will receive the invoice. */
        InvoiceCarbonCopyRecipients: account.IContactViewDto[];
        /** The Contact view of type welcome pack carbon copy contains the additional contacts who will receive the welcome packs. */
        WelcomePackCarbonCopyRecipients: account.IContactViewDto[];
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a group.The Group is an optional node in the customer hierarchy.It is used for invoicing structure and reporting purposes. */
    interface IGroupDto extends bluesky.core.models.account.IAccountDto {
        /** The Primary Group view contains attributes specific to Group and Primary Group account. These attributes include specifics of physical platform to which children accounts (Users and their Accesses) were provisioned. */
        PrimaryGroupView: bluesky.core.models.account.IPrimaryGroupViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        TechnicalAdminContactView: bluesky.core.models.account.ITechnicalAdminContactViewDto;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a Legal Entity.The Legal Entity is a node acting as a Payer template for the Billing account. */
    interface ILegalEntityDto extends bluesky.core.models.account.IAccountDto {
        /** The Contact view of type Bill-to contains the contact and address of a billable entity. */
        BillToView: bluesky.core.models.account.IBillToContactViewDto;
        /** The Legal Entity view contains attributes related to Legal Entity setup. */
        LegalEntityView: bluesky.core.models.account.ILegalEntityViewDto;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a local logo.The Local Logo is an optional node in the customer hierarchy, used for groupingor representing subsidiaries or geolocations of the Customer organization. */
    interface ILocalLogoDto extends bluesky.core.models.account.IAccountDto {
        /** The Local Logo view contains attributes related to Local Logo setup. */
        LocalLogoView: bluesky.core.models.account.ILocalLogoViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        TechnicalAdminContactView: bluesky.core.models.account.ITechnicalAdminContactViewDto;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a logo.A Logo represents the Customer which is in relation with Arkadin or Arkadin'spartner. It's the root of any customer hierarchy.In the case of WholeSale the Logo is a dummy node (Arkadin IS hasn't got thecomplete view of the wholesaler's customer).In the case of trial account the Logo is a dummy node.A logo is associated to a Arkadin subsidiary (or to Arkadin SAS). */
    interface ILogoDto extends bluesky.core.models.account.IAccountDto {
        /** Logo view */
        LogoView: bluesky.core.models.account.ILogoViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        TechnicalAdminContactView: bluesky.core.models.account.ITechnicalAdminContactViewDto;
    }
}

declare namespace bluesky.core.models.account {
    /** Management Subsidiaries are used in the Platform Selection algorithms. */
    interface IManagementSubsidiaryDto extends bluesky.core.models.IResourceBase {
        /** Gets or sets the unique identifier. */
        Id: number;
        /** Flag to identify the Management Subsidiary at Logo level. */
        IsMain: boolean;
        /** Subsidiary code. */
        SubsidiaryCode: string;
        /** Name of the management subsidiary to be used for AudioClassicplatform selection. */
        SubsidiaryName: string;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a primary group.The Primary group is a mandatory group of Users.It represents Customer's organizational physical Site, Department, Office orLocation or used purely for grouping purposes.The Primary group is linked to all services platforms used by the users. */
    interface IPrimaryGroupDto extends bluesky.core.models.account.IAccountDto {
        /** The Primary Group view contains attributes specific to Group and Primary Group account. These attributes include specifics of physical platform to which children accounts (Users and their Accesses) were provisioned. */
        PrimaryGroupView: bluesky.core.models.account.IPrimaryGroupViewDto;
        /** Dispatching viewContains attributes related to account segmentation and dispatching. */
        DispatchingView: bluesky.core.models.account.IDispatchingViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        TechnicalAdminContactView: bluesky.core.models.account.ITechnicalAdminContactViewDto;
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a reporting group 1.The Reporting Group has no functional requirement for billing, rating,...It is only used for Reporting issues. */
    interface IReportingGroup1Dto extends bluesky.core.models.account.IAccountDto {
    }
}

declare namespace bluesky.core.models.account {
    /** Dto of a reporting group 2.The Reporting Group has no functional requirement for billing, rating,...It is only used for Reporting issues. */
    interface IReportingGroup2Dto extends bluesky.core.models.account.IAccountDto {
    }
}

declare namespace bluesky.core.models.account {
    /** Header DTO of a UserAccount. */
    interface IUserAccountHeaderDto extends bluesky.core.models.account.IAccountHeaderDto {
        Email: string;
        Login: string;
        SelfCareRelation: string;
        SelfCareRole: string;
        HasExtendedScope: boolean;
    }
}

declare namespace bluesky.core.models.account {
    /** DTO of a user.The UserAccount represents individual (person) or inanimate entity that that receivesand consumes services provided by Arkadin. */
    interface IUserAccountDto extends bluesky.core.models.account.IAccountDto {
        /** The UserAccount-Contact view contains the contact and address of a physical user of Arkadin services. */
        UserContactView: bluesky.core.models.account.IUserContactViewDto;
        /** The UserAccount view contains attributes related to UserAccount setup. */
        UserView: bluesky.core.models.account.IUserViewDto;
        /** The Contact view of type Technical-Admin contains the contact and address of a technical administrator, responsible for a group of Users. */
        TechnicalAdminContactView: bluesky.core.models.account.ITechnicalAdminContactViewDto;
    }
}
