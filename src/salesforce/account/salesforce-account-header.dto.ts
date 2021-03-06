namespace bluesky.core.model.salesforce {
    /**
     * Dto of a sales force account header.
     * TODO MGA: should be paginated in the long term (see SFDC DAL)
     * TODO MGA: should be ligther vs. sf account dto
     */
    export interface ISalesForceAccountHeaderDto extends IResourceBase {
        Id: string;
        Name: string;
        Segmentation: string;
        /** TODO MGA: ask CAPI to update to use Enum  */
        SegmentType: string;
        CountryName: IMetraNetEnumerationDto;
        CustomerSize: IMetraNetEnumerationDto;
    }
}