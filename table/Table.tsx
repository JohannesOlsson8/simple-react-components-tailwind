import { TableContent } from './table-content/TableContent';
import { KeyValue } from '../../Fetchers';
import { LoadingTable } from './loading-table/LoadingTable';

export interface IAction<T> {
  button?: IButton<T>;
  label: string;
}
export interface IColumnsValue {
  columnsValue?: KeyValue[] | null;
}

interface IButton<T> {
  tooltip: string;
  icon: React.ReactNode;
  action: (row: T) => void;
}

export interface TableProps<T extends IColumnsValue> {
  columns: { key: string; label: string; formatter?: (row: T) => React.ReactNode }[];
  data: T[];
  actions?: IAction<T>[];
  loading?: boolean;
}

function Table<T>(props: TableProps<T>) {
  if (props.loading) {
    return <LoadingTable />;
  } else {
    return (
      <div className="overflow-x-auto min-w-full">
        <table className="min-w-full">
          <TableContent {...props} />
        </table>
      </div>
    );
  }
}

export { Table };
