declare module 'react-google-recaptcha' {
  import { Component } from 'react';

  interface ReCAPTCHAProps {
    sitekey: string;
    hl?: string;
    onChange?: (token: string | null) => void;
    onExpired?: () => void;
  }

  export default class ReCAPTCHA extends Component<ReCAPTCHAProps> {}
}