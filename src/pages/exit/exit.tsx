import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { exit } from "../../store/action";

import styles from "./exit.module.css";

import { useDispatch } from "react-redux";

function Exit() {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(exit());
  };
  return (
    <div className={styles.exit}>
      <Button
        onClick={onClick}
        htmlType="button"
        type="primary"
        size="medium"
        extraClass="mt-6 mb-20"
      >
        Уверны, что хотите выйти?
      </Button>
    </div>
  );
}

export default Exit;
