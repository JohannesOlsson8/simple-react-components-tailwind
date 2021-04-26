import classes from './TableContent.module.scss';
import { IAction, IColumnsValue, TableProps } from '../Table';
import { Action } from '../action/Action';
import { useMemo } from 'react';

const Th: React.FC = (props) => <th className="text-left px-2 whitespace-nowrap pr-6 pb-2">{props.children}</th>;
const Td: React.FC = (props) => (
  <td key="x" className="text-left font-normal px-2 py-2.5 whitespace-nowrap pr-3">
    {props.children}
  </td>
);

function TableContent<T extends IColumnsValue>(props: TableProps<T>) {
  const { columns, actions } = props;
  const tbody = useMemo(() => {
    return props.data.map((row: T) => (
      <tr>
        {actions
          ? actions.map((x: IAction<T>) => (
              <td key={x.label}>
                <Action<T> {...x} row={row} />
              </td>
            ))
          : null}
        {props.columns.map((column) => {
          let content = !column.formatter ? row[column.key as keyof T] : column.formatter(row);
          return <Td>{content}</Td>;
        })}
      </tr>
    ));
  }, [props.data, props.columns.length, actions, props.columns]);

  return (
    <>
      <thead className={classes.tableHead}>
        <tr>
          {actions
            ? actions.map((x: IAction<T>) => (
                <td key={x.label}>
                  <span className="sr-only">{x.label}</span>
                </td>
              ))
            : null}
          {columns.map((column) => (
            <Th key={column.key as string}>{column.label}</Th>
          ))}
        </tr>
      </thead>
      <tbody className={classes.striped}>{tbody}</tbody>
    </>
  );
}

export { TableContent };
