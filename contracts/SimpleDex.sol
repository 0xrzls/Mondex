// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

contract SimpleDex {
    address public tokenA;
    address public tokenB;

    uint256 public reserveA;
    uint256 public reserveB;

    uint256 private constant FEE_NUMERATOR = 997;
    uint256 private constant FEE_DENOMINATOR = 1000;

    event LiquidityAdded(address indexed provider, uint256 amountA, uint256 amountB);
    event SwapExecuted(address indexed user, uint256 amountIn, uint256 amountOut, bool isAtoB);

    constructor(address _tokenA, address _tokenB) {
        require(_tokenA != _tokenB, "Tokens must be different");
        tokenA = _tokenA;
        tokenB = _tokenB;
    }

    function addLiquidity(uint256 amountA, uint256 amountB) external {
        require(IERC20(tokenA).transferFrom(msg.sender, address(this), amountA), "TokenA transfer failed");
        require(IERC20(tokenB).transferFrom(msg.sender, address(this), amountB), "TokenB transfer failed");

        reserveA += amountA;
        reserveB += amountB;

        emit LiquidityAdded(msg.sender, amountA, amountB);
    }

    function swapTokenAForTokenB(uint256 amountAIn, uint256 minAmountBOut) external {
        require(IERC20(tokenA).transferFrom(msg.sender, address(this), amountAIn), "TokenA transfer failed");

        uint256 amountAInWithFee = amountAIn * FEE_NUMERATOR;
        uint256 numerator = amountAInWithFee * reserveB;
        uint256 denominator = (reserveA * FEE_DENOMINATOR) + amountAInWithFee;
        uint256 amountBOut = numerator / denominator;

        require(amountBOut >= minAmountBOut, "Insufficient output amount");
        require(IERC20(tokenB).transfer(msg.sender, amountBOut), "TokenB transfer failed");

        reserveA += amountAIn;
        reserveB -= amountBOut;

        emit SwapExecuted(msg.sender, amountAIn, amountBOut, true);
    }

    function swapTokenBForTokenA(uint256 amountBIn, uint256 minAmountAOut) external {
        require(IERC20(tokenB).transferFrom(msg.sender, address(this), amountBIn), "TokenB transfer failed");

        uint256 amountBInWithFee = amountBIn * FEE_NUMERATOR;
        uint256 numerator = amountBInWithFee * reserveA;
        uint256 denominator = (reserveB * FEE_DENOMINATOR) + amountBInWithFee;
        uint256 amountAOut = numerator / denominator;

        require(amountAOut >= minAmountAOut, "Insufficient output amount");
        require(IERC20(tokenA).transfer(msg.sender, amountAOut), "TokenA transfer failed");

        reserveB += amountBIn;
        reserveA -= amountAOut;

        emit SwapExecuted(msg.sender, amountBIn, amountAOut, false);
    }
}
