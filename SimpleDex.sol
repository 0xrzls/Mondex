// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
  function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
  function transfer(address recipient, uint256 amount) external returns (bool);
  function balanceOf(address account) external view returns (uint256);
}

contract SimpleDEX {
    address public token0;
    address public token1;
    
    uint256 public reserve0;
    uint256 public reserve1;
    
    uint256 public constant FEE_NUMERATOR = 997; // Fee 0.3%
    uint256 public constant FEE_DENOMINATOR = 1000;
    
    event LiquidityAdded(address indexed provider, uint256 amount0, uint256 amount1);
    event LiquidityRemoved(address indexed provider, uint256 amount0, uint256 amount1);
    event SwapExecuted(address indexed swapper, address fromToken, uint256 amountIn, address toToken, uint256 amountOut);

    constructor(address _token0, address _token1) {
        require(_token0 != address(0) && _token1 != address(0), "Invalid token address");
        token0 = _token0;
        token1 = _token1;
    }
    
    // Tambahkan likuiditas: pengguna mentransfer token ke kontrak
    function addLiquidity(uint256 amount0, uint256 amount1) external {
        require(IERC20(token0).transferFrom(msg.sender, address(this), amount0), "Transfer token0 failed");
        require(IERC20(token1).transferFrom(msg.sender, address(this), amount1), "Transfer token1 failed");
        
        reserve0 += amount0;
        reserve1 += amount1;
        
        emit LiquidityAdded(msg.sender, amount0, amount1);
    }
    
    // Hapus likuiditas dengan mengeluarkan proporsi token yang ada
    // sharePercent dinyatakan dalam basis poin (misalnya, 10000 = 100%)
    function removeLiquidity(uint256 sharePercent) external {
        require(sharePercent > 0 && sharePercent <= 10000, "Invalid share percent");
        uint256 amount0 = (reserve0 * sharePercent) / 10000;
        uint256 amount1 = (reserve1 * sharePercent) / 10000;
        
        require(IERC20(token0).transfer(msg.sender, amount0), "Transfer token0 failed");
        require(IERC20(token1).transfer(msg.sender, amount1), "Transfer token1 failed");
        
        reserve0 -= amount0;
        reserve1 -= amount1;
        
        emit LiquidityRemoved(msg.sender, amount0, amount1);
    }
    
    // Swap: tukar token dari satu jenis ke jenis lain dengan formula constant product.
    // Jika fromToken == token0, maka swap token0 ke token1, dan sebaliknya.
    function swap(uint256 amountIn, address fromToken) external returns (uint256 amountOut) {
        require(fromToken == token0 || fromToken == token1, "Invalid token");
        bool isToken0 = fromToken == token0;
        address toToken = isToken0 ? token1 : token0;
        uint256 reserveIn = isToken0 ? reserve0 : reserve1;
        uint256 reserveOut = isToken0 ? reserve1 : reserve0;
        
        // Transfer token dari pengirim ke kontrak
        require(IERC20(fromToken).transferFrom(msg.sender, address(this), amountIn), "Transfer failed");
        
        // Hitung jumlah token keluar dengan menerapkan fee
        uint256 amountInWithFee = amountIn * FEE_NUMERATOR;
        amountOut = (reserveOut * amountInWithFee) / (reserveIn * FEE_DENOMINATOR + amountInWithFee);
        require(amountOut > 0, "Insufficient output amount");
        
        require(IERC20(toToken).transfer(msg.sender, amountOut), "Transfer to recipient failed");
        
        // Update cadangan (reserve)
        if(isToken0) {
            reserve0 += amountIn;
            reserve1 -= amountOut;
        } else {
            reserve1 += amountIn;
            reserve0 -= amountOut;
        }
        
        emit SwapExecuted(msg.sender, fromToken, amountIn, toToken, amountOut);
    }
}
