import { CREATE_NEW_FILE } from '../context/actions/file-actions';
import { File, DispatchActions, Navigate } from '../types';
import getUniqueId from '../utils/get-unique-id';

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  state: File[];
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  dispatch: DispatchActions;
  navigate: Navigate;
  inputError: boolean;
  setInputError: React.Dispatch<React.SetStateAction<boolean>>;
}

type Event = React.MouseEvent<HTMLDivElement, MouseEvent>;

function useModal(props: Props) {
  const {
    setIsModalOpen,
    state,
    title,
    setTitle,
    dispatch,
    navigate,
    inputError,
    setInputError,
  } = props;

  const closeModalByClickOnBackdrop = (event: Event) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const inputValidation = () => {
    const titleHasNotOnlySpace = !/^\s*$/.test(title);
    return title && title.length <= 30 && titleHasNotOnlySpace;
  };

  const createNewFile = () => {
    if (inputValidation()) {
      const id = getUniqueId(state);
      dispatch({ type: CREATE_NEW_FILE, payload: { id, title } });
      navigate(`/editor/${id}`);
    } else {
      setInputError(true);
    }
  };

  const handleInputErrorOnTyping = (titleValue: string) => {
    if (inputError) {
      setInputError(false);
    }
    setTitle(titleValue);
  };

  return {
    closeModalByClickOnBackdrop,
    createNewFile,
    handleInputErrorOnTyping,
  };
}

export default useModal;
