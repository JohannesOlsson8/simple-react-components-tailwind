import classes from './LoadingTable.module.scss';

export const LoadingTable = () => (
  <>
    <span className="sr-only">Laddar data för tabell</span>
    <div className={`bg-gray-100 flex flex-grow ${classes.root}`} aria-hidden="true" />
  </>
);
