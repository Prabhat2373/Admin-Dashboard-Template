// import React, { useContext, useEffect, useMemo, createContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   useSortBy,
//   useTable,
//   usePagination,
//   useRowSelect,
//   TableInstance,
// } from 'react-table';
// import useDeepCompareEffect from 'use-deep-compare-effect';
// import SearchIcon from '../../../Assets/Icons/SearchIcon';
// import SortDownArrow from '../../../Assets/Icons/SortDownArrow';
// import SortUpArrow from '../../../Assets/Icons/SortUpArrow';
// import { debounce, useQuery } from '../../../Utils/Helpers';
// import { Button } from '../../Button/Button';
// import { DataTabContext } from '../../DataTab';
// import { InputField } from '../../Fields/InputField';
// import Form from '../../Form';
// import Loader from '../../Loader/Loader';
// import Menu from '../../Menu';
// import Pagination from '../Pagination';

// const IndeterminateCheckbox = React.forwardRef(
//   ({ indeterminate, ...rest }, ref) => {
//     const defaultRef = React.useRef();
//     const resolvedRef = ref || defaultRef;

//     React.useEffect(() => {
//       resolvedRef.current.indeterminate = indeterminate;
//     }, [resolvedRef, indeterminate]);

//     return (
//       <>
//         <input
//           type="checkbox"
//           ref={resolvedRef}
//           {...rest}
//           className={'checked:rounded '}
//         />
//       </>
//     );
//   }
// );

// interface DataTableProps {
//   toolbar: (formState: TableInstance<object>) => JSX.Element;
//   centerButtonGroup: (formState: TableInstance<object>) => JSX.Element;
// }

// function DataTable(props: any) {
//   const { setSelectedRows, params } = props;
//   const [sortModel, setSortModel] = React.useState([{}]);

//   const formState = useTable(
//     {
//       columns: props.columns,
//       data: props.data,
//       pageCount: props?.controlledPageCount,
//       onPaginationChange: props?.onPageChange,
//       manualPagination: true,
//       initialState: { sortBy: sortModel },
//     },
//     useSortBy,
//     usePagination,
//     useRowSelect,
//     (hooks) => {
//       props?.isSelectionAvaliable ??
//         hooks.visibleColumns.push((columns) => [
//           // Let's make a column for selection
//           {
//             id: 'selection',

//             // The header can use the table's getToggleAllRowsSelectedProps method
//             // to render a checkbox
//             Header: ({ getToggleAllPageRowsSelectedProps }) => (
//               <div className="p-1">
//                 <IndeterminateCheckbox
//                   {...getToggleAllPageRowsSelectedProps()}
//                 />
//               </div>
//             ),
//             // The cell can use the individual row's getToggleRowSelectedProps method
//             // to the render a checkbox
//             Cell: ({ row }) => (
//               <div>
//                 {props?.isCheckBox ??
//                   (true && (
//                     <IndeterminateCheckbox
//                       {...row.getToggleRowSelectedProps()}
//                     />
//                   ))}
//               </div>
//             ),
//           },
//           ...columns,
//         ]);
//     }
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     page,
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     pageCount,
//     gotoPage,
//     nextPage,
//     previousPage,
//     setPageSize,
//     selectedFlatRows,
//     allColumns,
//     setHiddenColumns,
//     state,
//     state: { pageIndex, pageSize, selectedRowIds, sortBy },
//   } = formState;
//   const [expanded, setExpanded] = React.useState(null);
//   useDeepCompareEffect(() => {
//     console.log(sortBy);
//     props?.onPageSort &&
//       props?.onPageSort({
//         sortColumn: sortBy?.[0]?.id ?? '',
//         sortOrder: sortBy?.[0]?.desc ? 0 : 1,
//       });
//     setSortModel(sortBy);
//   }, [sortBy]);

//   return (
//     <div className="w-full box-border bg-text-400 rounded-2xl">
//       <div className="w-full flex justify-between items-center py-6 pl-4 pr-6 relative">
//         <div className="w-[280px] flex items-center">
//           <Form initialValues={{ search: params?.get('searchQuery') }}>
//             {() => {
//               return (
//                 <div className="relative w-full">
//                   <span className="z-[2] cursor-pointer absolute right-2 top-2">
//                     <SearchIcon />
//                   </span>
//                   <InputField
//                     name="search"
//                     placeholder="Search"
//                     onInput={(e) => {
//                       props?.onSearch(e?.target?.value);
//                     }}
//                   />
//                 </div>
//               );
//             }}
//           </Form>
//         </div>
//         <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">
//           {props?.centerButtonGroup}
//         </div>
//         <div className="w-auto flex items-center box-border">
//           {!!props?.toolbar && props?.toolbar(formState)}
//         </div>
//       </div>
//       <table
//         {...getTableProps()}
//         className="table-auto w-full select-none transition-all"
//       >
//         {!props?.renderCollapse && (
//           <thead>
//             {headerGroups.map((headerGroup) => (
//               <tr
//                 {...headerGroup.getHeaderGroupProps()}
//                 className="border-b-2 border-bgColor-300"
//               >
//                 {headerGroup.headers.map((column) => {
//                   return (
//                     <th
//                       {...column.getHeaderProps(column.getSortByToggleProps())}
//                       className="text-[16px] text-left pl-6 py-6 font-openSans"
//                     >
//                       {column.render('Header') == 'Actions'
//                         ? ''
//                         : column.render('Header')}
//                       {column?.sortable && (
//                         <span className="text-text-100">
//                           {column.isSorted ? (
//                             column.isSortedDesc ? (
//                               <SortDownArrow
//                                 style={{
//                                   display: 'inline',
//                                   marginLeft: '17px',
//                                 }}
//                               />
//                             ) : (
//                               <SortUpArrow
//                                 style={{
//                                   display: 'inline',
//                                   marginLeft: '17px',
//                                 }}
//                               />
//                             )
//                           ) : (
//                             ''
//                           )}
//                         </span>
//                       )}
//                     </th>
//                   );
//                 })}
//               </tr>
//             ))}
//           </thead>
//         )}
//         <tbody {...getTableBodyProps()} className="relative w-full h-[150px]">
//           {props?.isLoading ? (
//             <Loader />
//           ) : (
//             page.map((row) => {
//               prepareRow(row);
//               return (
//                 <>
//                   <tr
//                     {...row.getRowProps()}
//                     className={`border-b border-bgColor-300 font-openSans ${
//                       row?.id == expanded
//                         ? 'bg-primary-600 border bg-opacity-20 border-t-primary-600'
//                         : ''
//                     }`}
//                     onClick={() => {
//                       setExpanded(row?.id == expanded ? '' : row?.id);
//                     }}
//                   >
//                     {row.cells.map((cell) => {
//                       return (
//                         <td
//                           {...cell.getCellProps()}
//                           className={`body2 pl-6 py-5 text-[14px] text-text-100 ${
//                             !!props.onRowClick
//                               ? 'cursor-pointer'
//                               : 'cursor-auto'
//                           }`}
//                           onClick={(e) => {
//                             props?.renderCollapse
//                               ? () => {
//                                   setExpanded('');
//                                 }
//                               : e.preventDefault();
//                             !['actions', 'selection'].includes(
//                               cell.column.id
//                             ) && props.onRowClick(row?.original?.[props?.id]);
//                           }}
//                         >
//                           {cell.render('Cell')}
//                         </td>
//                       );
//                     })}
//                   </tr>
//                   {props?.renderCollapse && (
//                     <tr
//                       {...row.getRowProps()}
//                       className={`transition-all duration-1000 w-full ${
//                         expanded == row?.id ? 'h-auto' : 'h-0 hidden'
//                       }`}
//                     >
//                       <td colSpan={row.cells.length}>
//                         {props?.renderCollapse(row, {
//                           expanded,
//                           setExpanded,
//                         })}
//                         {/* <div className="h-20"></div> */}
//                       </td>
//                     </tr>
//                   )}
//                 </>
//               );
//             })
//           )}
//         </tbody>
//       </table>
//       {props?.pagination({
//         gotoPage,
//         nextPage,
//         previousPage,
//         totalPages: props?.controlledPageCount,
//         canPreviousPage,
//         canNextPage,
//         pageOptions,
//         pageIndex: state.pageIndex,
//         setPageSize: state.setPageSize,
//         pageSize: state.pageSize,
//       })}
//     </div>
//   );
// }

// export default DataTable;

import React from 'react';

const Table = () => {
  return <div>Table</div>;
};

export default Table;
