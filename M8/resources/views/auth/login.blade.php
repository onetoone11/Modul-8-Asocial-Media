@extends('app')

@section('content')
<div class="container login-body">

                <div class="card-body bg--light">
                    <h2>{{ __('Login') }}</h2>
                    <hr class="bg--light">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="login-inputs">
                        <div class="form-group">
                            <input id="email" type="email" placeholder="Email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                        </div>

                        <div class="form-group">
                                <input id="password" type="password" placeholder="Password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                        </div>
                    </div>


                        <div class="form-group">
                                <button type="submit" class="login-btn">
                                    {{ __('Login') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
</div>
<div id="login"></div>
@endsection
