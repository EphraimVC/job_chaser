export interface InputProps { 
    children: React.ReactNode
}

export interface InputContextType {
    inputValue?: string;
    setInputValue?: React.Dispatch<React.SetStateAction<string>>;
  }
  
  export interface ButtonProps { 
      children: React.ReactNode
      clickedText?:string
      defaultColor?: string
      clickedColor?: string
      optionalFunc?:()=> void
  }
  