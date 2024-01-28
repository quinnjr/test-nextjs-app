import webpack from 'webpack';
import { CustomWebpackBrowserSchema, TargetOptions } from '@angular-builders/custom-webpack';

const config = (
  config: webpack.Configuration,
  options: CustomWebpackBrowserSchema,
  targetOptions: TargetOptions
): webpack.Configuration => {
  config.module?.rules?.map((rule: any) => {
    const regex = new RegExp(/\.scss/);
    if (rule.test === regex) {
      rule.loaders.push({
        loader: 'postcss-loader'
      })
    }
  })
  return config;
};

export default config;
