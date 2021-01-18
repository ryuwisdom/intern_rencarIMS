import React, { Fragment, useState, useEffect } from 'react';
// import ErrorMessage from '../../components/Error';
import styles from './SignUpInput.scss';

export default function SignUpInput({
  id,
  label,
  type,
  onChange,
  value,
  padding,
  isButton,
  isImage,
  buttonValue,
  onClick,
  isSearchInput,
  isSearch,
  name,
  searchResult,
  userSelectedCompany,
  userInputValidation,
  formValidation,
  onKeyPress,
  isTyping,
  isSubmit,
}) {
  const [searchProps, setSearchProps] = useState('');

  useEffect(() => {
    setSearchProps(searchResult);
  }, [searchResult]);

  const changeSearchProps = (value) => {
    setSearchProps(value);
  };

  return (
    <div className={styles.input_btn_container}>
      <div className={styles.input_wrap} style={{ marginTop: `${padding}px` }}>
        {isSearch ? (
          <>
            <input
              id={id ? id : null}
              type={type ? type : 'text'}
              name={name}
              onChange={(e) => {
                searchProps ? changeSearchProps(e.target.value) : onChange(e);
              }}
              onKeyPress={onKeyPress}
              value={searchProps ? searchProps : null}
              className={styles.user_input}
              autoComplete='off'
            />
            <label
              htmlFor={id ? id : null}
              children={label}
              className={styles.input_label}
            />
            <div className={styles.input_border} />
          </>
        ) : (
          <>
            <input
              id={id ? id : null}
              type={type ? type : 'text'}
              name={name}
              onChange={onChange}
              onKeyPress={onKeyPress}
              onClick={() => {
                isSearchInput && onClick();
              }}
              value={isSubmit ? userSelectedCompany : value}
              className={styles.user_input}
              formValidation={formValidation}
              autoComplete='off'
            />
            <label
              htmlFor={id ? id : null}
              children={label}
              className={styles.input_label}
            />
            {userInputValidation && isTyping && isTyping === name ? (
              <div
                className={
                  formValidation !== undefined && formValidation.valid
                    ? styles.successMessage
                    : styles.errorMessage
                }>
                {formValidation && formValidation.message}
              </div>
            ) : (
              <div className={styles.input_border} />
            )}
          </>
        )}
        {isButton && buttonValue ? (
          <div className={styles.button_wrap} onClick={onClick}>
            <div className={styles.input_button}>
              <div>{buttonValue}</div>
            </div>
          </div>
        ) : (
          ''
        )}
        {isImage ? (
          <div className={styles.image_wrap}>
            <img
              src='/1366.png'
              srcSet='/1366@2x.png 2x, /1366@3x.png 3x'
              className={styles.input_button}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
