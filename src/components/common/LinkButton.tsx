import { useHistory } from "react-router-dom";

// Proptypes for our LinkButton
type Props = {
  content: string;
  path: string;
  styles?: string;
};

// The LinkButton will act like a react-router-dom Link component, but styled as a button
function LinkButton({ content, path, styles }: Props) {
  let history = useHistory(); // Allows you to navigate in a component

  // Routes to the path specified in props
  function routeTo(path: string) {
    history.push(path);
  }

  return (
    <button
      className={styles ? "defaultButton " + styles : "defaultButton"}
      onClick={() => routeTo(path)}
    >
      {content}
    </button>
  );
}

export default LinkButton;
