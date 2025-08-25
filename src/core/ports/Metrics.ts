export type Metrics = {
    helmDataSciencePackageCount: number;
    educationalResourceCount: number;
};

export type GetMetrics = () => Promise<Metrics>;
