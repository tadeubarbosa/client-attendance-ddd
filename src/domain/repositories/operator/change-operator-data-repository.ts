export default interface ChangeOperatorDataRepository {
    updateById(operatorId: number, data: [string: any][]): boolean;
}