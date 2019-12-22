import React from 'react';

const ComponentStatesHandler = props => {
    const { isLoading = false, isError = false, children } = props;

    const preLoaderComp = () => {
          if(props.preLoader){
              return props.preLoader;
          }
          return <div>---</div>
    }

    const errorComp = () => {
        if(props.errorComp){
            return props.errorComp;
        }
        return <div>ERROR</div>
  }


    if(isLoading){
        return preLoaderComp();
    }else if(isError){
        return errorComp()
    }else{
        return children;
    }
}


export default ComponentStatesHandler;