/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
import { QueryCtrl } from 'app/plugins/sdk';
import TimeFilter from './types/time_filter';
import Selectable from './types/selectable';
export declare class InstanaQueryCtrl extends QueryCtrl {
    private templateSrv;
    private backendSrv;
    private $q;
    static templateUrl: string;
    version: number;
    uniqueOperators: Array<Selectable>;
    uniqueBeaconTypes: Array<Selectable>;
    aggregationFunctions: {
        label: string;
    }[];
    uniqueEntityTypes: Array<Selectable>;
    allCustomMetrics: Array<Selectable>;
    availableMetrics: Array<Selectable>;
    uniqueEntities: Array<Selectable>;
    uniqueTags: Array<Selectable>;
    allWebsiteMetrics: Array<Selectable>;
    snapshots: Array<string>;
    entitySelectionText: string;
    metricSelectionText: string;
    serviceEndpointSelectionText: string;
    previousMetricCategory: string;
    websiteApplicationLabel: string;
    serviceEndpointTitle: string;
    timeFilter: TimeFilter;
    customFilters: any[];
    EMPTY_DROPDOWN_TEXT: string;
    ALL_APPLICATIONS: string;
    ALL_SERVICES: string;
    ALL_ENDPOINTS: string;
    OPERATOR_STRING: string;
    OPERATOR_NUMBER: string;
    OPERATOR_BOOLEAN: string;
    OPERATOR_KEY_VALUE: string;
    BUILT_IN_METRICS: string;
    CUSTOM_METRICS: string;
    ANALYZE_APPLICATION_METRICS: string;
    ANALYZE_WEBSITE_METRICS: string;
    APPLICATION_METRICS: string;
    SERVICE_METRICS: string;
    ENDPOINT_METRICS: string;
    defaults: {};
    /** @ngInject **/
    constructor($scope: any, $injector: any, templateSrv: any, backendSrv: any, $q: any);
    isInfrastructure(): boolean;
    isAnalyzeWebsite(): boolean;
    isAnalyzeApplication(): boolean;
    isApplicationMetric(): boolean;
    isServiceMetric(): boolean;
    isEndpointMetric(): boolean;
    onWebsiteChanges(refresh: any, isAnalyze: boolean): any;
    onApplicationChanges(refresh: any, isAnalyze: boolean): any;
    onServiceChanges(refresh: boolean): any;
    onEndpointChanges(refresh: boolean): any;
    onFilterChange(refresh: boolean): any;
    onMetricCategorySelect(): void;
    onBeaconTypeSelect(refresh: boolean): void;
    filterForEntityType(refresh: boolean): void;
    filterEntityTypes(): any;
    findMatchingEntityTypes(entityType: Selectable): boolean;
    onEntityTypeSelect(refresh: boolean): any;
    onMetricsFilter(refresh: boolean): void;
    isAbleToShowAllMetrics(): boolean;
    addFilter(): void;
    removeFilter(index: number): void;
    onTagFilterChange(index: number): void;
    checkMetricAndRefresh(refresh: boolean): void;
    selectionReset(): void;
    resetEntityTypeSelection(): void;
    resetEntitySelection(): void;
    resetMetricSelection(): void;
    adjustEntitySelectionPlaceholder(): void;
    adjustMetricSelectionPlaceholder(): void;
    adjustServiceEndpointSelectionPlaceholder(): void;
    onNamefilterChanges(): void;
    onGroupChange(): void;
    onChange(): void;
    onServiceEndpointSelected(): void;
    onMetricSelect(): void;
    onAllMetricsSelect(): void;
    toggleAdvancedSettings(): void;
    toggleGraphAggregation(): void;
    addCustomFilter(): void;
    removeCustomFilter(index: number, refresh?: boolean): void;
    isNotSingleStatOrGauge(): boolean;
    canShowAggregation(): boolean;
    isPluginThatSupportsAggregation(): boolean;
    isAnalyzeCategory(): boolean;
    loadVersion(): void;
    supportsApplicationPerspective(): boolean;
}
