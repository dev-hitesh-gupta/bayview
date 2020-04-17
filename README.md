Install java also
Docker setup
How to Install Docker On Ubuntu 18.04 {2020 Tutorial}
Post-installation steps for Linux
sudo apt-get update
sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker

AWS CLI setup 
sudo  apt install awscli
aws configure


Sam setup
SAM setup
sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)"
test -d ~/.linuxbrew && eval $(~/.linuxbrew/bin/brew shellenv)
test -d /home/linuxbrew/.linuxbrew && eval $(/home/linuxbrew/.linuxbrew/bin/brew shellenv)
test -r ~/.bash_profile && echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.bash_profile
echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.profile
echo "eval $(/home/hitesh-sfin533/.linuxbrew/bin/brew shellenv)" >>~/.profile 
echo "export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"" >>~/.profile
echo "export PATH="/usr/local/sbin:$PATH"" >>~/.profile
brew tap aws/tap
brew install aws-sam-cli
sam --version
sam init
cd sam-app
sam build

Step function setup
Setting Up Step Functions Local (Downloadable Version) - AWS Step Functions


Now run step function on local
sam local start-lambda
java -jar StepFunctionsLocal.jar --lambda-endpoint http://localhost:3001
aws stepfunctions --endpoint http://localhost:8083 create-state-machine --definition "{\
  \"Comment\": \"A Hello World example of the Amazon States Language using an AWS Lambda Local function\",\
  \"StartAt\": \"HelloWorld\",\
  \"States\": {\
    \"HelloWorld\": {\
      \"Type\": \"Task\",\
      \"Resource\": \"arn:aws:lambda:us-east-1:123456789012:function:HelloWorldFunction\",\
      \"End\": true\
    }\
  }\
}\
}}" --name "HelloWorld" --role-arn "arn:aws:iam::012345678901:role/DummyRole"

aws stepfunctions --endpoint http://localhost:8083 start-execution --state-machine arn:aws:states:us-east-1:123456789012:stateMachine:HelloWorld --name test

aws stepfunctions --endpoint http://localhost:8083 describe-execution --execution-arn arn:aws:states:us-east-1:123456789012:execution:HelloWorld:test

