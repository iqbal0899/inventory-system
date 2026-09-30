import PropTypes from "prop-types";
import styles from "../../css/table.module.css";

const Table = ({
  columns,
  data,
  loading = false,
  emptyMessage = "Tidak ada data.",
  rowKey = "id",
}) => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={
                  column.className || ""
                }
                style={{
                  width: column.width,
                  textAlign:
                    column.align || "left",
                }}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td
                colSpan={columns.length}
                className={styles.loading}
              >
                Memuat data...
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className={styles.empty}
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr
                key={
                  row[rowKey] ??
                  index
                }
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={
                      column.className || ""
                    }
                    style={{
                      textAlign:
                        column.align || "left",
                    }}
                  >
                    {column.render
                      ? column.render(
                          row,
                          index
                        )
                      : row[column.key] ?? "-"}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
      width: PropTypes.string,
      align: PropTypes.oneOf([
        "left",
        "center",
        "right",
      ]),
      className: PropTypes.string,
      render: PropTypes.func,
    })
  ).isRequired,

  data: PropTypes.array.isRequired,

  loading: PropTypes.bool,

  emptyMessage: PropTypes.string,

  rowKey: PropTypes.string,
};

export default Table;