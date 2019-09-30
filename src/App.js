import React from "react";
import logo from "./logo.svg";
import TextField, {HelperText, Input} from '@material/react-text-field';

function App() {
  return (
    <div className="App">
      <div class="tw-lg:flex tw-justify-center tw-lg:pb-6 tw-bg-gray-600">
        <div class="tw-border-gray-200 tw-shadow-lg tw-plan-wrap tw-flex-1 tw-mx-auto tw-lg:mx-0">
          <div class="tw-mb-5 tw-lg:mb-0 tw-relative tw-z-10 tw-bg-gray-500 tw-rounded-lg tw-px-6 tw-lg:px-4 tw-pt-5 tw-pb-6 tw-text-center tw-h-full tw-mx-3 tw-flex tw-mobile:mx-auto">
            <div class="tw-flex tw-flex-col tw-justify-around tw-h-full tw-w-full">
              <a href="/settings/subscription/plan" class="tw-flex tw-justify-center">
                <img class="tw-relative" alt="foo" src={logo} />
              </a>
              <a
                href="/settings/subscription/plan"
                class="tw-plan-start-learning-button tw-btn tw-mobile:mx-auto tw-w-full tw-text-black tw-border-grey"
              >
                Start Learning
              </a>
              <div className="tw-lg:py-3 tw-pt-3 tw-text-center">
                <a href="#" class="tw-border-white tw-border-2 tw-text-white tw-bg-transparent-10 tw-lg:w-1/2 tw-lg:mx-auto tw-lg:w-full tw-py-3 tw-lg:py-1 tw-px-2 tw-rounded-full tw-font-bold tw-flex tw-lg:hidden tw-lg:group-hover:flex tw-items-center tw-justify-center tw-text-xs tw-lg:text-sm tw-max-w-xs tw-mx-auto tw-uppercase ">
                  Explore Tooling
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div class="floating-label-wrap">
        <input type="text" class="floating-label-field floating-label-field--s3" id="field-1" placeholder="Text" />
        <label for="field-1" class="floating-label">Text</label>
      </div>
      <br/>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
      </div>
      <TextField
          label='Dog'
          helperText={<HelperText>Help Me!</HelperText>}
          // onTrailingIconSelect={() => this.setState({value: ''})}
          outlined={true}
        ><Input
          //  value={this.state.value}
          //  onChange={(e) => this.setState({value: e.currentTarget.value})} 
          />
        </TextField>
        <TextField
            label='Name'
            >
            <Input
              // value={this.state.value}
              // onChange={(e) => this.setState({value: e.currentTarget.value})}
               />
          </TextField>
          <TextField
  outlined
  label='Name'
  leadingIcon={<i className='material-icons'>favorite</i>}
  trailingIcon={<i className='material-icons'>visibility</i>}
>
  <Input
    // value={this.state.value}
    // onChange={(e) => this.setState({value: e.currentTarget.value})}
     />
</TextField>

      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
