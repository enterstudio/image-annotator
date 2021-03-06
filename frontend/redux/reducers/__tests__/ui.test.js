import uiReducer from '../ui';

// Import action labels & action creators for use in specs
import * as actions from '../../actions';

describe('ui reducer', () => {

  it('is a function', () => {
    expect(uiReducer).toBeDefined();
    expect(uiReducer).toBeInstanceOf(Function);
  });

  it('initializes a default state object', () => {
    const initialState = uiReducer(undefined, {});
    expect(initialState).toEqual({
      FAQModal: false,
      AgeConsentModal: false,
    });
  });

  it('does not mutate state when receiving an irrelevant action', () => {
    const initialState = uiReducer(undefined, {});
    const nextState = uiReducer(initialState, {});
    expect(nextState).toBe(initialState);
  });

  const { SHOW_FAQ_MODAL } = actions;
  describe(`on ${SHOW_FAQ_MODAL}`, () => {

    it('sets a state flag to display a FAQ modal', () => {
      const initialState = uiReducer(undefined, {});
      const nextState = uiReducer(initialState, {
        type: SHOW_FAQ_MODAL,
      });
      expect(nextState).not.toBe(initialState);
      expect(nextState.FAQModal).toBeDefined();
      expect(nextState.FAQModal).not.toBe(initialState.FAQModal);
      expect(nextState.FAQModal).toBe(true);
    });

  });

  const { HIDE_FAQ_MODAL } = actions;
  describe(`on ${HIDE_FAQ_MODAL}`, () => {

    it('sets a state flag to hide a FAQ modal', () => {
      const initialState = uiReducer({
        FAQModal: true,
      }, {});
      const nextState = uiReducer(initialState, {
        type: HIDE_FAQ_MODAL,
      });
      expect(nextState).not.toBe(initialState);
      expect(nextState.FAQModal).toBeDefined();
      expect(nextState.FAQModal).not.toBe(initialState.FAQModal);
      expect(nextState.FAQModal).toBe(false);
    });

  });

  const { SHOW_AGE_CONSENT_MODAL } = actions;
  describe(`on ${SHOW_AGE_CONSENT_MODAL}`, () => {

    it('sets a state flag to display an Age Consent modal', () => {
      const initialState = uiReducer(undefined, {});
      const nextState = uiReducer(initialState, {
        type: SHOW_AGE_CONSENT_MODAL,
      });
      expect(nextState).not.toBe(initialState);
      expect(nextState.AgeConsentModal).toBeDefined();
      expect(nextState.AgeConsentModal).not.toBe(initialState.AgeConsentModal);
      expect(nextState.AgeConsentModal).toBe(true);
    });

  });

  const { HIDE_AGE_CONSENT_MODAL } = actions;
  describe(`on ${HIDE_AGE_CONSENT_MODAL}`, () => {

    it('sets a state flag to hide an Age Consent modal', () => {
      const initialState = uiReducer({
        AgeConsentModal: true,
      }, {});
      const nextState = uiReducer(initialState, {
        type: HIDE_AGE_CONSENT_MODAL,
      });
      expect(nextState).not.toBe(initialState);
      expect(nextState.AgeConsentModal).toBeDefined();
      expect(nextState.AgeConsentModal).not.toBe(initialState.AgeConsentModal);
      expect(nextState.AgeConsentModal).toBe(false);
    });

  });

});
