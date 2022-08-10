rm -rf ./staking/v1/abi
rm -rf ./staking/v1/contracts
mkdir ./staking/v1/abi
mkdir ./staking/v1/contracts
cp ../social-money-staking/artifacts/contracts/RollStakingRewards.sol/RollStakingRewards.json ./staking/v1/abi
cp ../social-money-staking/artifacts/contracts/RollStakingFactory.sol/RollStakingFactory.json ./staking/v1/abi
cp ../social-money-staking/artifacts/contracts/StakingRegistry.sol/StakingRegistry.json ./staking/v1/abi

npx typechain --target ethers-v5 --out-dir ./staking/v1/contracts ./staking/v1/abi/**/*.json