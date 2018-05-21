import { shallow } from "enzyme"
import ConnectedPage from '../../pages/auth/signed-in'

describe("The auth/signed-in page", () => {
  describe(`when supplied with a valid`, () => {
    describe(`url prop`, () => {
      it("should render", () => {
        const mockUrl = {
            "query": {},
            "pathname": "/auth/signed-in",
            "asPath": "/auth/signed-in#access_token=VKJZX2_--an_TstbYrI4cqlkTswnwjHp&scope=openid%20profile%20email&expires_in=7200&token_type=Bearer&state=b3a4b1f5-7fe2-4d64-af22-ded213573f93&id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1EVTRNalJHTmtNd04wRkVNRUV6TmtKR016SkZSakJDTmtWRVJrVXhNalpCTUVZeE1EWkNPQSJ9.eyJuaWNrbmFtZSI6InJvYiIsIm5hbWUiOiJyb2JAdGhlcm9iYnJlbm5hbi5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvMzNkNDgwMjYyMmM4Y2U5ZTU5MzhlYmMxYzM5Y2ZmODc_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZyby5wbmciLCJ1cGRhdGVkX2F0IjoiMjAxOC0wNS0yMVQwMjoyNzo1NC45NDZaIiwiZW1haWwiOiJyb2JAdGhlcm9iYnJlbm5hbi5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly90aGVyb2JicmVubmFuLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1YWZlNTRjMjQyZjEwZTE4YmE3M2U4M2UiLCJhdWQiOiJVMFVIVVZNejdlVlFNRlN1YUQ2RXRqcFlpNUlaVEo2MyIsImlhdCI6MTUyNjg2OTY3NSwiZXhwIjoxNTI2OTA1Njc1LCJhdF9oYXNoIjoiSm1sREdtQmdJWjd1NFhyNXNfai1TdyIsIm5vbmNlIjoiLTNiR1lWNms3NVg1QncxcWUtUm5Pak1hZzY1Tm80UTEifQ.ezKPlVgRGRuMjB1vsE7-0cj9QYJAd1D-Mgllm4bZnPZ8zi4L1653rzdeekJGxwXn6eLnsGD7msZXMvecs10GhCx44gjUMBXS5gGhZafnYF9xUmtza2b7Pgd7LevNt3zdTmSdkVZufOHiyFG8sCIiUabUqpGjNZEKQCwHZPki6DsD-fDim9T2ErfcNTnuYlfSfC78iVFep3h_92xGg12ngeOxo10NZdYqS4G0gHKO_le2nH3Bz87jZ6Y_ZVPso0BDqi-a6NFGVLxCJNimm7KPRld-s08d_ToxGYIjUb4tCejgUJCwpVGY7FqjomZIZIeSgshpKj_02mIsswMs-_xQaA"
        }
        const mockProps = {
          url: mockUrl
        }
        const wrapper = shallow(<ConnectedPage {...mockProps} />)
        expect(wrapper).toBeDefined()
      })
    })
  })
})
