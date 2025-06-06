export = AutofillStorage;
declare function AutofillStorage(): void;
declare class AutofillStorage {
    private ds_;
    private logger_;
    private modified_;
    isModified(): boolean;
    setAsModified(): void;
    private formatFilePath_;
    private newProfileDataSet_;
    load(): DataSet;
    save(): void;
    findEntry(entry: AutofillRecordKey): AutofillRecord;
    newEntry(entry: AutofillRecord): void;
    updateEntry(entry: AutofillRecord): void;
    deleteEntry(entry: AutofillRecordKey): void;
    private findEntry_;
}
declare namespace AutofillStorage {
    export { AutofillRecord, AutofillRecordKey, getInstance };
}
import DataSet = require("@nginstack/engine/lib/dataset/DataSet.js");
declare function getInstance(): AutofillStorage;
interface AutofillRecordKey {
    processKey: number;
    interactionName: string;
    gridName: string;
    fieldName: string;
    fieldType: string;
}
interface AutofillRecord {
    processKey: number;
    interactionName: string;
    gridName: string;
    fieldName: string;
    fieldType: string;
    nullFieldContent: number;
    strFieldContent: string;
    numFieldContent: number;
    dateFieldContent: Date;
}
