

This repo is used to build the static source for hellercommaa.github.io

It's based off the work from google at https://github.com/tensorflow/tfjs-models/tree/master/mobilenet

The model was initially based on work from google at https://tfhub.dev/google/aiy/vision/classifier/birds_V1/1

To install / build / run:

1) `yarn`

2) `yarn dev` for dev (todo: look at browsersync?) or `yarn make` for production

2a) be sure to copy ./web_model to ./dist/web_model otherwise the model won't load and you'll just get errors

3) copy contents of ./dist to hellercommaa.github.io repo
