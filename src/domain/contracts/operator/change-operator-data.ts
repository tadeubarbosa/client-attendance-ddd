export default interface ChangeOperatorData {
    updateById(operatorId: number, data: [string: any][]): boolean;
}